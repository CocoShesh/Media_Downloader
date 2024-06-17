import { useState } from "react";
import {
  TwitterDownloader,
  FacebookDownloader,
  InstagramDownloader,
  TiktokDownloader,
  YoutubeDownloader,
  ThreadsDownloader,
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
  const {
    setSelectedType,
    setData,
    setFData,
    setInstaData,
    setTiktokData,
    setYtData,
    setThreadsData,
  } = useDownloader();
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
        case "Youtube":
          response = await YoutubeDownloader(data.url);
          setYtData(response);
          break;
        case "Threads":
          response = await ThreadsDownloader(data.url);
          setThreadsData(response);
          break;

        default:
          throw new Error("Unsupported platform");
      }

      if (
        response.error ||
        response.errors ||
        response.success === false ||
        response.result === "Failed Download !"
      ) {
        toast.error(response.error || response.message || "An error occurred.");
      } else {
        Navigate("/Download");
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
      <section className="h-[500px] card dark:bg-transparent flex flex-col items-center justify-center w-full px-64  2xl:w-[1500px] max-lg:px-5  mt-5 rounded-2xl ">
        <section className="w-fit px-7 py-1 h-8 rounded-2xl mb-5 bg-white text-black">
          Best in industry
        </section>
        <h1 className="text-white text-5xl w-[700px] max-md:w-full text-center max-sm:text-4xl ">
          Download High-quality videos and images from different social media
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="max-md:h-fit h-16  max-md:rounded-lg max-md:p-5 mt-10 w-[700px]  max-md:w-full relative flex  max-md:flex-col rounded-full bg-white p-2  gap-3 text-black">
            {loading && (
              <div className="text-white absolute bg-[#f2f3f6]   z-10 w-full flex max-md:rounded-md  flex-col items-center justify-center  h-full rounded-full top-0 left-0  ">
                <div className="loader  ">
                  <span>SocDownloader</span>
                  <span>SocDownloader</span>
                </div>
              </div>
            )}
            <section className="relative w-full">
              <input
                type="text"
                placeholder="Paste a link here..."
                className="w-full h-full  max-md:h-10 max-md:rounded-lg bg-[#f2f3f6] rounded-full px-10 placeholder:text-black  focus:outline-[#230056]"
                {...register("url", { required: "This field is required" })}
              />
              <PiLinkSimpleBold className="absolute top-4 max-md:top-3 left-3 text-xl" />

              {errors.url && (
                <span className="text-[#ffd14c] absolute -top-8  max-md:top-full left-4">
                  {errors.url.message}
                </span>
              )}
            </section>
            <section className="relative ">
              <select
                {...register("selectedType", {
                  required: "This field is required",
                })}
                className={`select select-bordered rounded-full max-md:w-full bg-[#f2f3f6] ${
                  errors.url && "max-md:mt-3"
                } max-md:rounded-lg`}
              >
                <option value="" disabled selected>
                  What Site?
                </option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Threads">Threads</option>
                <option value="Twitter">Twitter</option>
                <option value="Tiktok">Tiktok</option>
                <option value="Youtube">Youtube</option>
                <option value="Spotify">Spotify</option>
              </select>
              {errors.selectedType && (
                <span className="text-[#ffd14c] absolute w-[200px]  -top-8 max-md:top-full left-2">
                  {errors.selectedType.message}
                </span>
              )}
            </section>
            <button
              type="submit"
              className={` w-[200px] h-full ${
                errors.selectedType && "max-md:mt-5"
              } max-md:h-10 max-md:rounded-lg max-md:w-full  rounded-full bg-[#e47231] text-white `}
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
