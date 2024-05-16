import axios from "axios";
const apiKey: string = import.meta.env.VITE_APP_X_RAPIDAPI_KEY as string;
export const Downloader = async (url: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://social-media-video-downloader.p.rapidapi.com/smvd/get/all",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
      },
      params: {
        url: url,
        fileName: "media",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
