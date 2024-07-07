import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
import { handleSelectedItem } from "../../utils/LinkUtils";
import { useState } from "react";
const SpotifyDownload = () => {
  const { spotifyData } = useDownloaderContext();
  const { download, percentage, isInProgress } = useDownloader();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <section className="flex items-center justify-center gap-5">
        <div className=" flex-col gap-5 flex items-center justify-center mt-5">
          {spotifyData?.medias?.map((video, index) => {
            return (
              <div key={index} className="relative">
                <img
                  src={spotifyData?.thumbnail}
                  className="h-[350px] w-[300px] rounded-md bg-white object-cover"
                />
                <span className="px-4 uppercase py-1 absolute top-0 right-0 bg-white text-black">
                  {video?.quality}
                </span>
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                    handleSelectedItem(
                      download,
                      video.url,
                      `${spotifyData?.title}.${video.extension}`
                    );
                  }}
                  className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
                >
                  Download
                </button>
                {selectedIndex === index && isInProgress && (
                  <>
                    <span className="absolute bottom-14 left-1 text-white text-lg ">
                      {" "}
                      Percentage
                    </span>

                    <progress
                      className="absolute bottom-10 w-full left-0 "
                      id="file"
                      value={percentage}
                      max="100"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SpotifyDownload;
