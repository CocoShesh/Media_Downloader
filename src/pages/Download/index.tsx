import { useDownloader } from "../../context/DownloaderContext";
const Download = () => {
  const { data } = useDownloader();
  return (
    <>
      <section className="h-[500px] card flex flex-col items-center justify-center w-full px-64  2xl:w-[1500px] max-lg:px-5  mt-5 rounded-2xl ">
        <section className="w-fit px-7 py-1 h-8 rounded-2xl mb-5 bg-white text-black">
          Best in industry
        </section>
        <h1 className="text-white text-5xl w-[700px] max-md:w-full text-center max-sm:text-4xl ">
          Download High-quality videos and images from different social media
        </h1>
        <section>
          {/* {data.map(
            (item, index) =>
              item.response.url && (
                <a
                  key={index}
                  href={item.response.url}
                  download
                  className="w-fit px-7 py-1 h-8 rounded-2xl mb-5 bg-white text-black"
                >
                  {item.response.resolution}
                </a>
              )
          )} */}
        </section>
      </section>
    </>
  );
};

export default Download;
