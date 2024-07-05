import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
import { handleSelectedItem } from "../../utils/LinkUtils";
import { useState } from "react";
const YoutubeDownload = () => {
  const { ytData } = useDownloaderContext();
  const { download, percentage } = useDownloader();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <section className="flex items-center justify-center gap-5">
        <div className=" flex-col gap-5 grid grid-cols-2 mt-5">
          {ytData?.links?.map((video, index) => {
            return (
              <div key={index} className="relative">
                <img
                  src={ytData?.picture}
                  className="h-[350px] w-[300px] rounded-md bg-white object-cover"
                />
                <span className="px-4 uppercase py-1 absolute top-0 right-0 bg-white text-black">
                  {video?.quality?.replace(/render_/, "")}
                </span>
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                    const extension =
                      video?.quality === "audio" ? "mp3" : "mp4";
                    handleSelectedItem(
                      download,
                      `${video?.link}`,
                      `${ytData?.title}.${extension}`
                    );
                  }}
                  className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
                >
                  Download
                </button>
                {selectedIndex === index && (
                  <span className="absolute bottom-14 left-1 text-white text-lg ">
                    {" "}
                    Percentage
                  </span>
                )}
                {selectedIndex === index && (
                  <progress
                    className="absolute bottom-10 w-full left-0 "
                    id="file"
                    value={percentage}
                    max="100"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default YoutubeDownload;
