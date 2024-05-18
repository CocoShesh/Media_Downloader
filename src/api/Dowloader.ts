import axios from "axios";
const apiKey: string = import.meta.env.VITE_APP_X_RAPIDAPI_KEY as string;

export const Downloader = async (url: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://facebook-video-and-reel-downloader.p.rapidapi.com/",
      params: {
        url: url,
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "facebook-video-and-reel-downloader.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
