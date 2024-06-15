import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";

const Download = () => {
  const { data } = useDownloaderContext();
  const { download } = useDownloader();

  const handleSelectedItem = async (link: string, fileName: string) => {
    download(link, fileName);
  };

  const getQualityLabel = (bitrate: number) => {
    if (bitrate >= 2500000) {
      return "1080p";
    } else if (bitrate >= 1500000) {
      return "720p";
    } else if (bitrate >= 1000000) {
      return "480p";
    } else if (bitrate >= 500000) {
      return "360p";
    } else {
      return "240p";
    }
  };

  return (
    <section className="h-fit py-10 card flex flex-col items-center justify-center w-full px-64 2xl:w-[1500px] max-lg:px-5 mt-5 rounded-2xl">
      <h1 className="text-white text-5xl w-[700px] max-md:w-full text-center max-sm:text-4xl">
        Download Your Files
      </h1>
      <div>
        <section className="flex items-center justify-center gap-5">
          <section className="flex flex-col gap-5">
            <h1 className="text-center mt-3">{data?.user?.description}</h1>
            <span className="text-center ">{data?.user.screen_name}</span>

            {data?.media?.video && data.media.video.videoVariants.length > 0
              ? data.media.video.videoVariants.map((video, index) => (
                  <section className="relative" key={index}>
                    <video className="h-[200px] w-full object-cover" controls>
                      <source src={video.url} type="video/mp4" />
                    </video>
                    <span className="absolute top-0 right-0 bg-white text-black px-3 py-1">
                      {getQualityLabel(video.bitrate)}
                    </span>
                    <button
                      onClick={() =>
                        handleSelectedItem(
                          video.url,
                          `${data.user.screen_name}_video_${getQualityLabel(
                            video.bitrate
                          )}.mp4`
                        )
                      }
                      className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white  rounded-b-md"
                    >
                      Download
                    </button>
                  </section>
                ))
              : data?.media?.photo && data.media.photo.length > 0
              ? data.media.photo.map((photo, index) => (
                  <section className="relative" key={index}>
                    <img
                      src={photo.url}
                      alt={`media_${index}`}
                      className="h-[350px] w-full rounded-md bg-white object-cover"
                    />
                    <button
                      onClick={() =>
                        handleSelectedItem(
                          photo.url,
                          `${data.user.screen_name}_photo.png`
                        )
                      }
                      className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white  rounded-b-md"
                    >
                      Download
                    </button>
                  </section>
                ))
              : null}
          </section>
        </section>
      </div>
    </section>
  );
};

export default Download;
