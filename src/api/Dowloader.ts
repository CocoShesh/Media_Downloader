import axios from "axios";

const apiKey: string = import.meta.env.VITE_APP_X_RAPIDAPI_KEY as string;
import { MediaData } from "../context/DownloaderContext";

export const TwitterDownloader = async (url: string): Promise<MediaData> => {
  try {
    const options = {
      method: "POST",
      url: "https://twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com/twidown",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host":
          "twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        url: url,
      },
    };

    const response = await axios.request(options);
    console.log(response.data);

    return response.data as MediaData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const FacebookDownloader = async (url: string): Promise<MediaData> => {
  try {
    const options = {
      method: "GET",
      url: "https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php",
      params: {
        url: url,
      },
      headers: {
        "x-rapidapi-key": "91afa38e15mshec1dc2b2813aae7p1f2fdcjsn016b4889ccb8",
        "x-rapidapi-host": "facebook-reel-and-video-downloader.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data as MediaData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
