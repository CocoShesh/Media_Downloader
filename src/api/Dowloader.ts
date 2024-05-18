import axios from "axios";
const apiKey: string = import.meta.env.VITE_APP_X_RAPIDAPI_KEY as string;
export const Downloader = async (url: string) => {
  try {
    const options = {
      method: "POST",
      url: "https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "social-download-all-in-one.p.rapidapi.com ",
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
