import { useState } from "react";
import { Downloader } from "../../api/Dowloader";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDownloader } from "../../context/DownloaderContext";
import { useNavigate } from "react-router-dom";
import { PiLinkSimpleBold } from "react-icons/pi";
type Inputs = {
  url: string;
  selectedType: string;
};

const MainContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { setSelectedType, setData } = useDownloader();
  const [loading, setLoading] = useState<boolean>(false);
  const Navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    setSelectedType(data.selectedType);

    try {
      setLoading(true);
      const response = await Downloader(data.url);
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      Navigate("/download");
    }
  };

  return (
    <>
      <section className="h-[500px] card flex flex-col items-center justify-center w-full px-64  2xl:w-[1500px] max-lg:px-5  mt-5 rounded-2xl ">
        <section className="w-fit px-7 py-1 h-8 rounded-2xl mb-5 bg-white text-black">
          Best in industry
        </section>
        <h1 className="text-white text-5xl w-[700px] max-md:w-full text-center max-sm:text-4xl ">
          Download High-quality videos and images from different social media
        </h1>
        {loading && <h1 className="text-white">Loading...</h1>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="max-md:h-fit h-16  max-md:rounded-lg max-md:p-5 mt-10 w-[700px]  max-md:w-full relative flex  max-md:flex-col rounded-full bg-white p-2  gap-3 text-black">
            <section className="relative w-full">
              <input
                type="text"
                placeholder="Paste a link here..."
                className="w-full h-full max-md:h-10 max-md:rounded-lg bg-[#f2f3f6] rounded-full px-10 placeholder:text-black  focus:outline-[#230056]"
                {...register("url", { required: "This field is required" })}
              />
              <PiLinkSimpleBold className="absolute top-3 left-3 text-xl" />
            </section>
            {errors.url && (
              <span className="text-[#ffd14c] absolute -top-6 left-8">
                {errors.url.message}
              </span>
            )}

            <button
              type="submit"
              className="w-[200px] h-full  max-md:h-10 max-md:rounded-lg max-md:w-full  rounded-full bg-[#e47231] text-white "
            >
              DOWNLOAD
            </button>
          </section>
        </form>
      </section>
    </>
  );
};

export default MainContent;
