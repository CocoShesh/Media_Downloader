import axios from "axios";

const apiKey: string = import.meta.env.VITE_APP_X_RAPIDAPI_KEY as string;
import { MediaData } from "../context/DownloaderContext";

export const Downloader = async (url: string): Promise<MediaData> => {
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

    // Ensure response.data matches MediaData type
    return response.data as MediaData;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw error after logging it
  }
};
