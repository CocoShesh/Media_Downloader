import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import { handleSelectedItem } from "../../utils/LinkUtils";
import useDownloader from "react-use-downloader";

const TiktokDownload = () => {
  const { tiktokData } = useDownloaderContext();
  const { download } = useDownloader();
  return (
    <>
      <section className="flex  flex-col items-center justify-center gap-5">
        <p className="mt-10"> {tiktokData?.description}</p>
        <div className="  gap-5 grid grid-cols-2  mt-5">
          <div className="relative w-full ">
            <h1 className="text-center text-lg"> No Watermark</h1>
            <img
              src={tiktokData?.cover}
              alt=""
              className="w-[450px] h-[350px] rounded-t-md object-contain bg-black"
            />

            <button
              onClick={() =>
                handleSelectedItem(
                  download,
                  `${tiktokData?.video}`,
                  `${tiktokData?.description}.mp4`
                )
              }
              className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
            >
              Download
            </button>
          </div>
          <div className="relative w-full ">
            <h1 className="text-center text-lg"> Original Video</h1>
            <img
              src={tiktokData?.cover}
              alt=""
              className="w-[450px] h-[350px] rounded-t-md object-contain bg-black"
            />

            <button
              onClick={() =>
                handleSelectedItem(
                  download,
                  `${tiktokData?.OriginalWatermarkedVideo}`,
                  `${tiktokData?.description}.mp4`
                )
              }
              className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
            >
              Download
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TiktokDownload;
