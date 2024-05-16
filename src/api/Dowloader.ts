import axios from "axios";
const apiKey: string = import.meta.env.VITE_APP_X_RAPIDAPI_KEY as string;
export const Downloader = async (url: string, origin: string) => {
  try {
    const options = {
      method: "POST",
      url: `https://all-media-downloader1.p.rapidapi.com/${origin}`,
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "all-media-downloader1.p.rapidapi.com",
      },
      data: {
        url: url,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
