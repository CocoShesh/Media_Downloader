import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import { handleSelectedItem } from "../../utils/LinkUtils";
import useDownloader from "react-use-downloader";
const FacebookDownload = () => {
  const { fData } = useDownloaderContext();
  const { download } = useDownloader();
  return (
    <>
      <section className="flex items-center justify-center gap-5">
        <section className="flex flex-col gap-5 ">
          <h1 className="text-center mt-5"> {fData?.title}</h1>

          {fData?.media.map((media, index) => (
            <section key={index} className="relative">
              <img
                src={media.image}
                alt={`media_${index}`}
                className="h-[350px] w-full  rounded-md bg-white object-cover"
              />
              <button
                onClick={() =>
                  handleSelectedItem(
                    download,
                    media.hd_url || media.sd_url || media.image,
                    `${fData.title}_${fData?.title}.${
                      media.type === "Photo" ? "png" : "mp4"
                    }`
                  )
                }
                className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
              >
                Download
              </button>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default FacebookDownload;
