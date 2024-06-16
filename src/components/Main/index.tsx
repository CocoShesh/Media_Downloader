import { useState } from "react";
import {
  TwitterDownloader,
  FacebookDownloader,
  InstagramDownloader,
  TiktokDownloader,
} from "../../api/Dowloader";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDownloader } from "../../context/DownloaderContext";
import { useNavigate } from "react-router-dom";
import { PiLinkSimpleBold } from "react-icons/pi";
import toast from "react-hot-toast";
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
  const { setSelectedType, setData, setFData, setInstaData, setTiktokData } =
    useDownloader();
  const [loading, setLoading] = useState<boolean>(false);
  const Navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (!data.selectedType) {
      return;
    }
    setSelectedType(data.selectedType);
    setLoading(true);
    try {
      let response;
      switch (data.selectedType) {
        case "Facebook":
          response = await FacebookDownloader(data.url);
          setFData(response);
          break;
        case "Twitter":
          response = await TwitterDownloader(data.url);
          setData(response);
          break;
        case "Instagram":
          response = await InstagramDownloader(data.url);
          setInstaData(response);
          break;
        case "Tiktok":
          response = await TiktokDownloader(data.url);
          setTiktokData(response);
          break;
        default:
          throw new Error("Unsupported platform");
      }
      if (response && !response.error && !response.errors) {
        Navigate("/Download");
      } else {
        toast.error(
          response.error || response.errors || "Unknown error occurred"
        );
      }
    } catch (error) {
      toast.error("An error occurred while processing your request.");
      console.error(error);
    } finally {
      setLoading(false);
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
                className="w-full h-full  max-md:h-10 max-md:rounded-lg bg-[#f2f3f6] rounded-full px-10 placeholder:text-black  focus:outline-[#230056]"
                {...register("url", { required: "This field is required" })}
              />
              <PiLinkSimpleBold className="absolute top-3 left-3 text-xl" />
            </section>
            {errors.url && (
              <span className="text-[#ffd14c] absolute -top-6 left-8">
                {errors.url.message}
              </span>
            )}
            <section className="relative ">
              <select
                {...register("selectedType", {
                  required: "This field is required",
                })}
                className="select select-bordered rounded-full max-md:w-full bg-[#f2f3f6]  max-md:rounded-lg"
              >
                <option value="" disabled selected>
                  What Site?
                </option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="Tiktok">Tiktok</option>
              </select>
              {errors.selectedType && (
                <span className="text-[#ffd14c] absolute -top-14 left-8">
                  {errors.selectedType.message}
                </span>
              )}
            </section>
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
