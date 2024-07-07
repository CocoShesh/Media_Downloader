import { useDownloader as useDownloaderContext } from "../../context/DownloaderContext";
import useDownloader from "react-use-downloader";
import { handleSelectedItem } from "../../utils/LinkUtils";
import { useState } from "react";
const YoutubeDownload = () => {
  const { ytData } = useDownloaderContext();
  const { download, percentage } = useDownloader();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <section className="flex items-center justify-center gap-5">
        <div className=" flex-col gap-5 grid grid-cols-2 mt-5">
          {ytData?.links?.map((video, index) => {
            return (
              <div key={index} className="relative">
                <img
                  src={ytData?.picture}
                  className="h-[350px] w-[300px] rounded-md bg-white object-cover"
                />
                <span className="px-4 uppercase py-1 absolute top-0 right-0 bg-white text-black">
                  {video?.quality?.replace(/render_/, "")}
                </span>
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                    const extension =
                      video?.quality === "audio" ? "mp3" : "mp4";
                    handleSelectedItem(
                      download,
                      "https://rr2---sn-p5qddn76.googlevideo.com/videoplayback?expire=1720349613&ei=TR-KZpquC4qBkucPo92Z-AU&ip=54.81.182.196&id=o-AGadJQtMtt-vRW3NnzcLlbvf09cKTGxbmcNmnCvcQ7Jr&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=my&mm=31%2C26&mn=sn-p5qddn76%2Csn-vgqsknzd&ms=au%2Conr&mv=u&mvi=2&pl=23&bui=AXc671KECEWuutIVf60J6YEH_7VuSSromQwTDI20_KJ803TOT9V42ajtqaBKxmSFCEm8-8Cf9aDUd3bI&spc=NO7bAQggwZLPGVqfRvta9j7rw8xJA8BMUShWvfSglTY2FDDcAg2ZCJJpj78b&vprv=1&svpuc=1&mime=video%2Fwebm&ns=DXZqWceuwwDnoi8WzmbMWFcQ&rqh=1&gir=yes&clen=492698563&dur=282.782&lmt=1710698414942301&mt=1720326512&fvip=1&keepalive=yes&c=WEB&sefc=1&txp=4532434&n=Ypw6hgkh2oY3fQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AHlkHjAwRQIgbzGdMjAevh9e0yt80icyujmi5cnPZuVZta_g7jbWXXsCIQDS-PHrAG0WGmdBhoEpsLvwJq5KjWZ5m4gkHzEWH8LKxw%3D%3D&sig=AJfQdSswRgIhANyZvXln2XmG8dLGhPKhml1I2EVigrqZ5ugSIevF3A1gAiEAj34lCdnnVFwN_ON1-DIyL8Av-IdadFdM1UJ60B6-mPk%3D",
                      `${ytData?.title}.${extension}`
                    );
                  }}
                  className="absolute bottom-0 bg-orange-500 w-full h-12 text-xl text-white rounded-b-md"
                >
                  Download
                </button>
                {selectedIndex === index && (
                  <span className="absolute bottom-14 left-1 text-white text-lg ">
                    {" "}
                    Percentage
                  </span>
                )}
                {selectedIndex === index && (
                  <progress
                    className="absolute bottom-10 w-full left-0 "
                    id="file"
                    value={percentage}
                    max="100"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default YoutubeDownload;
