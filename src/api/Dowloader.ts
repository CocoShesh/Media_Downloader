import axios from "axios";

const apiKey: string = import.meta.env.VITE_APP_X_RAPIDAPI_KEY as string;

export const TwitterDownloader = async (url: string) => {
  try {
    const options = {
      method: "POST",
      url: "https://twitter-downloader-download-twitter-videos-gifs-and-images.p.rapidapi.com/twidown",
      headers: {
        "x-rapidapi-key": "d278caefa0msh022d8fe2a4badc3p1fa4dcjsnf8c21f6e118b",
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

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const FacebookDownloader = async (url: string) => {
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
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const InstagramDownloader = async (url: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://social-media-video-downloader.p.rapidapi.com/smvd/get/instagram",
      params: {
        url: url,
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "social-media-video-downloader.p.rapidapi.com",
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

export const YoutubeDownloader = async (url: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://social-media-video-downloader.p.rapidapi.com/smvd/get/youtube",
      params: {
        url: url,
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "social-media-video-downloader.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const ThreadsDownloader = async (url: string) => {
  try {
    const data = new FormData();
    data.append("url", url);

    const options = {
      method: "POST",
      url: "https://all-media-downloader1.p.rapidapi.com/threadsdl",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "all-media-downloader1.p.rapidapi.com",
      },
      data: data,
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const SpotifyDownloader = async (url: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://spotify-downloader6.p.rapidapi.com/spotify",
      params: {
        spotifyUrl: url,
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "spotify-downloader6.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
