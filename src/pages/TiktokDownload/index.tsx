import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import { handleSelectedItem } from "../../utils/LinkUtils";
import useDownloader from "react-use-downloader";
import { useState } from "react";

const TiktokDownload = () => {
  const { tiktokData } = useDownloaderContext();
  const { download, isInProgress, percentage } = useDownloader();

  const [mediaIndexOriginal, setMediaIndexOriginal] = useState<
    string | undefined
  >("");
  const [mediaIndex, setMediaIndex] = useState<string | undefined>("");

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-5">
        <p className="mt-10">{tiktokData?.description}</p>
        <div className="gap-5 grid grid-cols-2 mt-5">
          <div className="relative w-full">
            <h1 className="text-center text-lg">No Watermark</h1>
            <img
              src={tiktokData?.cover}
              alt=""
              className="w-[450px] h-[350px] rounded-t-md object-contain bg-black"
            />
            <button
              onClick={() => {
                setMediaIndexOriginal(tiktokData?.video);
                handleSelectedItem(
                  download,
                  `${tiktokData?.video}`,
                  `${tiktokData?.description}.mp4`
                );
              }}
              className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
            >
              {mediaIndexOriginal === tiktokData?.video && isInProgress
                ? "Downloading"
                : "Download"}
            </button>
            {mediaIndexOriginal === tiktokData?.video && isInProgress && (
              <>
                <span className="absolute bottom-14 left-1 text-white text-lg">
                  Percentage
                </span>
                <progress
                  className="absolute bottom-10 w-full left-0"
                  id="file"
                  value={percentage}
                  max="100"
                />
              </>
            )}
          </div>
          <div className="relative w-full">
            <h1 className="text-center text-lg">Original Video</h1>
            <img
              src={tiktokData?.cover}
              alt=""
              className="w-[450px] h-[350px] rounded-t-md object-contain bg-black"
            />
            <button
              onClick={() => {
                setMediaIndex(tiktokData?.OriginalWatermarkedVideo);
                handleSelectedItem(
                  download,
                  `${tiktokData?.OriginalWatermarkedVideo}`,
                  `${tiktokData?.description}.mp4`
                );
              }}
              className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
            >
              {mediaIndex === tiktokData?.OriginalWatermarkedVideo &&
              isInProgress
                ? "Downloading"
                : "Download"}
            </button>
            {mediaIndex === tiktokData?.OriginalWatermarkedVideo &&
              isInProgress && (
                <>
                  <span className="absolute bottom-14 left-1 text-white text-lg">
                    Percentage
                  </span>
                  <progress
                    className="absolute bottom-10 w-full left-0"
                    id="file"
                    value={percentage}
                    max="100"
                  />
                </>
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TiktokDownload;
