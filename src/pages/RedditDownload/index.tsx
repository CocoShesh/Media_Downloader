import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
import { handleSelectedItem } from "../../utils/LinkUtils";
import { useState } from "react";
const RedditDownload = () => {
  const { redditData } = useDownloaderContext();
  const { download, percentage, isInProgress } = useDownloader();
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center mt-5"> {redditData?.title}</h1>
        <div className="gap-5 mt-5 flex items-center justify-center w-[800px] flex-wrap">
          {redditData?.medias.map((media, index) => (
            <div key={index} className="relative">
              <img
                src={redditData?.thumbnail}
                className="h-[350px] w-[300px] rounded-md bg-white object-cover"
              />
              <span className="px-4 uppercase py-1 absolute top-0 right-0 bg-white text-black">
                {media?.format}
              </span>
              <button
                onClick={() => {
                  setSelectedIndex(index);
                  handleSelectedItem(
                    download,
                    `https://rr3---sn-8pxuuxa-i5oed.googlevideo.com/videoplayback?expire=1720373163&ei=S3uKZv69DdmV1d8P0-aqsAw&ip=27.79.157.81&id=o-ABOTUl-oFERLoxwaebOIzrGsr5Q5e9qFcKYyajcyrkig&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=su&mm=31%2C29&mn=sn-8pxuuxa-i5oed%2Csn-8pxuuxa-i5o6k&ms=au%2Crdu&mv=m&mvi=3&pl=22&initcwndbps=1417500&bui=AXc671LOKqDDeKIhsoNQcS2-p7Wye4W0GtfjhREAkvTpwUtEQc-CS7nSEnewmx6HGvJ3uMyhnpePdXUZ&spc=NO7bASDGU4x7sizXzUKVsb6LQC1wPUq42tn8cAhcVnQe7gP8Bs2YdV1U-J77&vprv=1&svpuc=1&mime=video%2Fmp4&ns=Teg4lrnZjS1o5HBiCCNHHkYQ&rqh=1&cnr=14&ratebypass=yes&dur=220.218&lmt=1718373301779416&mt=1720351088&fvip=4&c=WEB&sefc=1&txp=4438434&n=UNu5H38Z-jGZxg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAMDpovYN1KJ0l4VA4FGexINg6Lmsrj006fioONo8UH5-AiAv-XzyQQrxlouZQ4WgnwpxJujteNUk_weRu5VMs047-Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHlkHjAwRgIhAMA5CdysYQCsp4ZwrXlicUdfSCXP_yePsCA3xVlqUMHvAiEAy81HOOe0dKx2XxUKQHwXZKzY8GVl-00XniifKxEyiXk%3D`,
                    `${redditData?.title}.${media.extension}`
                  );
                }}
                className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
              >
                {selectedIndex === index && isInProgress
                  ? "Downloading "
                  : "Download"}
              </button>
              {selectedIndex === index && isInProgress && (
                <>
                  <span className="absolute bottom-14 left-1 text-white text-lg ">
                    {" "}
                    Percentage
                  </span>
                  <progress
                    className="absolute bottom-10 w-full left-0 "
                    id="file"
                    value={percentage}
                    max="100"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RedditDownload;
