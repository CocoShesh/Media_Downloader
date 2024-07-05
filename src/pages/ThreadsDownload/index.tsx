import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
import { handleSelectedItem } from "../../utils/LinkUtils";
import { useState } from "react";

const ThreadsDownload = () => {
  const { threadsData } = useDownloaderContext();
  const { download, isInProgress, percentage } = useDownloader();
  const [mediaIndex, setMediaIndex] = useState<number>(0);

  const imageUrls = threadsData?.result.image_urls || [];
  const videoUrls = threadsData?.result.video_urls || [];
  const allUrls = [
    ...imageUrls.map(url => ({ url, type: "image" })),
    ...videoUrls.map(video => ({ url: video.download_url, type: "video" })),
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-5">
        <div className="gap-5 mt-5 flex items-center justify-center w-[800px] flex-wrap">
          {allUrls.map((media, index) => (
            <div key={index} className="relative">
              {media.type === "video" ? (
                <video
                  src={media.url}
                  className="h-[350px] w-[300px] rounded-md bg-white object-cover"
                  controls
                />
              ) : (
                <img
                  src={media.url}
                  className="h-[350px] w-[300px] rounded-md bg-white object-cover"
                />
              )}
              <button
                onClick={() => {
                  setMediaIndex(index);
                  handleSelectedItem(
                    download,
                    media.url,
                    `${threadsData?.creator}.${
                      media.type === "video" ? "mp4" : "png"
                    }`
                  );
                }}
                className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
              >
                {mediaIndex === index && isInProgress
                  ? "Downloading"
                  : "Download"}
              </button>
              {mediaIndex === index && isInProgress && (
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
          ))}
        </div>
      </section>
    </>
  );
};

export default ThreadsDownload;
