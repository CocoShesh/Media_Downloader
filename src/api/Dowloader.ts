import axios from "axios";

const apiKey: string = import.meta.env.VITE_APP_X_RAPIDAPI_KEY as string;
import { MediaData, FacebookData, ImageItem } from "../utils/Types";

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

export const FacebookDownloader = async (
  url: string
): Promise<FacebookData> => {
  try {
    const options = {
      method: "GET",
      url: "https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php",
      params: {
        url: url,
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "facebook-reel-and-video-downloader.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data as FacebookData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const InstagramDownloader = async (url: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://ig-downloader-instagram-downloader.p.rapidapi.com/fetch",
      params: {
        key: "dl",
        downloader: "public",
        url: url,
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "ig-downloader-instagram-downloader.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const TiktokDownloader = async (url: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/index",
      params: {
        url: url,
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host":
          "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
