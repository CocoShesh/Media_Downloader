import { useState } from "react";
import { useDownloader as downloads } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
const Download = () => {
  const { data } = downloads();
  const { download, percentage, isInProgress } = useDownloader();
  const [selectedItem, setSelectedItem] = useState<string>("");
  const handleSelectedItem = (link: string | undefined): void => {
    if (link) {
      download(link, "video.mp4");
    } else {
      console.error("Invalid URL:", link);
    }
  };

  return (
    <section className="h-[550px] card flex flex-col items-center justify-center w-full px-64 2xl:w-[1500px] max-lg:px-5 mt-5 rounded-2xl">
      <h1 className="text-white text-5xl w-[700px] max-md:w-full text-center max-sm:text-4xl">
        Download Your Files
      </h1>
      <div>
        <section className="flex items-center justify-center gap-5">
          <section className="flex flex-col gap-5">
            <h1> {data?.title}</h1>
            <img
              src={data?.thumbnail_url}
              alt="thumbnail"
              className="h-[200px]"
            />
          </section>
          <section className="flex flex-col  gap-5">
            <section
              onClick={() => handleSelectedItem(data?.sd)}
              className="bg-white w-[180px] cursor-pointer rounded-lg text-center text-black h-fit p-5"
            >
              Sd
            </section>
            <section
              onClick={() => handleSelectedItem(data?.hd)}
              className="bg-white w-[180px] cursor-pointer rounded-lg text-center text-black h-fit p-5"
            >
              Hd
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Download;
