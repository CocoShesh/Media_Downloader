import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import { handleSelectedItem } from "../../utils/LinkUtils";
import useDownloader from "react-use-downloader";
import { useState } from "react";
const FacebookDownload = () => {
  const { fData } = useDownloaderContext();
  const { download, percentage, isInProgress } = useDownloader();

  const [mediaIndex, setMediaIndex] = useState<number>(0);

  return (
    <>
      <section className="flex items-center justify-center gap-5">
        <section className="flex flex-col gap-5 w-[300px] ">
          <h1 className="text-center mt-5"> {fData?.title}</h1>

          {fData?.media.map((media, index) => (
            <section key={index} className="relative">
              <img
                src={media.image}
                alt={`media_${index}`}
                className="h-[350px] w-full  rounded-md bg-white object-cover"
              />
              <button
                onClick={() => {
                  setMediaIndex(index);
                  handleSelectedItem(
                    download,
                    media.hd_url || media.sd_url || media.image,
                    `${fData.title}_${Date.now()}.${
                      media.type === "Photo" ? "png" : "mp4"
                    }`
                  );
                }}
                className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
              >
                {mediaIndex === index && isInProgress
                  ? "Downloading "
                  : "Download"}
              </button>
              {mediaIndex === index && isInProgress && (
                <>
                  <span className="absolute bottom-14 left-1 text-white text-lg ">
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
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default FacebookDownload;
