import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import { handleSelectedItem } from "../../utils/LinkUtils";
import useDownloader from "react-use-downloader";

const SpotifyDownload = () => {
  const { spotifyData } = useDownloaderContext();
  const { download } = useDownloader();

  return (
    <>
      <section className="flex items-center justify-center gap-5">
        <div className=" flex-col gap-5 flex items-center justify-center mt-5">
          {spotifyData && (
            <>
              <img
                src={spotifyData.cover}
                alt={spotifyData.title}
                className="w-[300px] h-[200px]"
              />
              <div className="relative">
                <section className="h-[200px] bg-black flex items-center justify-center pb-5 rounded-t-md">
                  <audio controls>
                    <source src={spotifyData.download_link} type="audio/ogg" />
                  </audio>
                </section>

                <button
                  onClick={() => {
                    handleSelectedItem(
                      download,
                      `${spotifyData.download_link}`,
                      `${spotifyData.title}.mp3`
                    );
                  }}
                  className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
                >
                  Download
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SpotifyDownload;
