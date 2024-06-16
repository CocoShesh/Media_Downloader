import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
import { handleSelectedItem } from "../../utils/LinkUtils";
const InstagramDownload = () => {
  const { instaData } = useDownloaderContext();
  const { download } = useDownloader();

  return (
    <section className="flex items-center justify-center gap-5">
      <div className=" flex-col gap-5 grid grid-cols-2 mt-5">
        {instaData?.posts.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src="https://scontent-lhr6-1.cdninstagram.com/v/t51.29350-15/448322625_1246163343401062_1602399343026022816_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=110&_nc_ohc=xeaQaaLLJeAQ7kNvgF4fL4X&edm=AP_V10EBAAAA&ccb=7-5&ig_cache_key=MzM5MDMwNDk1Mzk0Mjk3OTM2MA%3D%3D.2-ccb7-5&oh=00_AYDw-ezqUaJm2zwNX6061cPzCRfse55JoHIdInDvxqqkkQ&oe=667496B0&_nc_sid=2999b8"
                className="h-[350px] w-[300px] rounded-md bg-white object-cover"
              />
              <button
                onClick={() =>
                  handleSelectedItem(download, image.thumbnail, "download.png")
                }
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
