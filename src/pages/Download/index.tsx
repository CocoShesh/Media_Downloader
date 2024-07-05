import React from "react";
import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import FacebookDownload from "../FacebookDownload";
import InstagramDownload from "../InstagramDownload";
import TiktokDownload from "../TiktokDownload";
import TwitterDownload from "../TwitterDownload";
import YoutubeDownload from "../YoutubeDownload";
import ThreadsDownload from "../ThreadsDownload";
import { Navigate } from "react-router-dom";

type ComponentMap = {
  [key: string]: React.ComponentType;
};
const componentMap: ComponentMap = {
  Facebook: FacebookDownload,
  Twitter: TwitterDownload,
  Tiktok: TiktokDownload,
  Instagram: InstagramDownload,
  Youtube: YoutubeDownload,
  Threads: ThreadsDownload,
};

const Download = () => {
  const { selectedType } = useDownloaderContext();
  const SelectedComponent = componentMap[selectedType];

  return (
    <>
      <section className="h-fit py-10 card dark:bg-transparent flex flex-col items-center justify-center w-full px-64 2xl:w-[1500px] max-lg:px-5 mt-5 rounded-2xl">
        <h1 className="text-white text-5xl w-[700px] max-md:w-full text-center max-sm:text-4xl">
          Download Your Files
        </h1>
        {SelectedComponent ? <SelectedComponent /> : <Navigate to="/" />}{" "}
      </section>
    </>
  );
};

export default Download;
