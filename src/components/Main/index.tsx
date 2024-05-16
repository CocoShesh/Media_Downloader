import { useState } from "react";
import { Downloader } from "../../api/Dowloader";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDownloader } from "../../context/DownloaderContext";
import { useNavigate } from "react-router-dom";

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
          <section className="h-16 mt-10 w-full  relative flex rounded-full bg-white p-2  gap-3 text-black">
            <input
              type="text"
              placeholder="Paste a link here..."
              className="w-full h-full bg-[#f2f3f6] rounded-full px-10 placeholder:text-black  focus:outline-[#230056]"
              {...register("url", { required: "This field is required" })}
            />
            {errors.url && (
              <span className="text-[#ffd14c] absolute -top-6 left-8">
                {errors.url.message}
              </span>
            )}
            <section className="relative">
              <select
                className="select select-bordered w-[150px] rounded-full focus:outline-blue-600 bg-[#f2f3f6]"
                {...register("selectedType", {
                  required: "This field is required",
                })}
              >
                <option value="">Select Type</option>
                <option value="mp3">MP3</option>
                <option value="mp4">MP4</option>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
              </select>
              {errors.selectedType && (
                <span className="text-[#ffd14c] absolute z-20 -top-10 w-full left-2">
                  {errors.selectedType.message}
                </span>
              )}
            </section>

            <button
              type="submit"
              className="w-[250px] h-full rounded-full bg-[#e47231] text-white "
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
