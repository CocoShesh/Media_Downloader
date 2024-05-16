import { useState } from "react";
import { useDownloader as downloads } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";

const Download = () => {
  const { data } = downloads();
  const [selectedItem, setSelectedItem] = useState<string>("");
  const { download, error, percentage } = useDownloader();

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSelectedItem = (link: string): void => {
    if (isValidUrl(link)) {
      download(link, "download.mp4");
      setSelectedItem(link);
    } else {
      console.error("Invalid URL:", link);
    }
  };

  return (
    <section className="h-[500px] card flex flex-col items-center justify-center w-full px-64 2xl:w-[1500px] max-lg:px-5 mt-5 rounded-2xl">
      <section className="w-fit px-7 py-1 h-8 rounded-2xl mb-5 bg-white text-black">
        Best in industry
      </section>
      <h1 className="text-white text-5xl w-[700px] max-md:w-full text-center max-sm:text-4xl">
        Download High-quality videos and images from different social media
      </h1>
      <div>
        <section className="grid grid-cols-5 gap-5 mt-5 ">
          {data?.links?.map((link, index) => (
            <section
              key={index}
              onClick={() => handleSelectedItem(link?.link)}
              className="bg-white w-[150px] cursor-pointer rounded-lg text-center text-black h-fit p-5"
            >
              {link?.quality}
              {selectedItem === link?.link && (
                <p className="text-red-500">downloading file: {percentage}</p>
              )}
            </section>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Download;
