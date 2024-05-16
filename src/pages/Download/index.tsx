import { useDownloader } from "../../context/DownloaderContext";

const Download = () => {
  const { data } = useDownloader();

  console.log(data);
  return (
    <section className="h-[500px] card flex flex-col items-center justify-center w-full px-64 2xl:w-[1500px] max-lg:px-5 mt-5 rounded-2xl">
      <section className="w-fit px-7 py-1 h-8 rounded-2xl mb-5 bg-white text-black">
        Best in industry
      </section>
      <h1 className="text-white text-5xl w-[700px] max-md:w-full text-center max-sm:text-4xl">
        Download High-quality videos and images from different social media
      </h1>
      <div>
        {/* <h2>{data?.title}</h2>
        <img
          src={data?.picture}
          alt={data?.title}
          className="w-[150px] h-[150px]"
        /> */}
        <section className="grid grid-cols-5 gap-5 mt-5">
          {data?.links.map(link => {
            return (
              <section className="bg-white w-[150px] cursor-pointer rounded-lg text-center text-black h-fit p-5">
                {link.quality}
              </section>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Download;
