import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
import { handleSelectedItem } from "../../utils/LinkUtils";
const InstagramDownload = () => {
  const { instaData } = useDownloaderContext();
  const { download } = useDownloader();

  return (
    <section className="flex items-center justify-center gap-5">
      <div className=" flex-col gap-5 grid grid-cols-2 mt-5">
        {instaData?.images &&
          instaData?.images?.length > 0 &&
          instaData?.images?.map((image, index) => {
            return (
              <div key={index} className="relative">
                <img
                  src={image}
                  className="h-[350px] w-[300px] rounded-md bg-white object-cover"
                />
                <button
                  onClick={() => {
                    handleSelectedItem(
                      download,
                      `${image}`,
                      `${instaData?.title}.png`
                    );
                  }}
                  className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
                >
                  Download
                </button>
              </div>
            );
          })}
        {instaData?.links &&
          instaData?.links?.length > 0 &&
          instaData?.links.map((video, index) => {
            return (
              <div key={index} className="relative">
                <img
                  src={instaData?.picture}
                  className="h-[350px] w-[300px] rounded-md bg-white object-cover"
                />
                <span className="px-4 uppercase py-1 absolute top-0 right-0 bg-white text-black">
                  {" "}
                  {video?.quality?.replace(/_0$/, "")}
                </span>
                <button
                  onClick={() => {
                    const extension = video.quality === "hd_0" ? "mp4" : "m4a";
                    handleSelectedItem(
                      download,
                      `${video.link}`,
                      `${instaData?.title}.${extension}`
                    );
                  }}
                  className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
                >
                  Download
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default InstagramDownload;
