import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
import { handleSelectedItem } from "../../utils/LinkUtils";

const LinkedinDownload = () => {
  const { linkData } = useDownloaderContext();
  const { download, isInProgress, percentage } = useDownloader();

  const type = linkData?.["@type"];
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-5">
        <h1 className="mt-10">
          {" "}
          {type === "VideoObject" ? linkData?.name : linkData?.articleBody}
        </h1>
        <div className="gap-5 flex  items-center justify-center mt-5">
          <div className="relative w-full">
            {type === "VideoObject" ? (
              <video
                controls
                className="w-[450px] h-[350px] rounded-t-md object-contain bg-black"
              >
                <source src={linkData?.contentUrl} type="video/mp4"></source>
              </video>
            ) : (
              <img
                src={linkData?.image.url}
                alt=""
                className="w-[450px] h-[350px] rounded-t-md object-contain bg-black"
              />
            )}
            <button
              onClick={() => {
                handleSelectedItem(
                  download,
                  `${
                    type === "VideoObject"
                      ? linkData?.contentUrl
                      : linkData?.image?.url
                  }`,
                  `${
                    type === "VideoObject"
                      ? linkData?.name
                      : linkData?.articleBody
                  }.${type === "VideoObject" ? "mp4" : "png"}`
                );
              }}
              className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
            >
              {isInProgress ? "Downloading" : "Download"}
            </button>
            {isInProgress && (
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

export default LinkedinDownload;
