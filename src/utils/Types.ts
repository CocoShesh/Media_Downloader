import { Dispatch, SetStateAction } from "react";

export interface DownloaderContextType {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
  data: MediaData | null;
  setData: Dispatch<SetStateAction<MediaData | null>>;
  fData: FacebookData | null;
  setFData: Dispatch<SetStateAction<FacebookData | null>>;
  instaData: InstgramData | null;
  setInstaData: Dispatch<SetStateAction<InstgramData | null>>;
  setTiktokData: Dispatch<SetStateAction<TwitterData | null>>;
  tiktokData: TwitterData | null;
  linkData: LinkedinData | null;
  setLinkData: Dispatch<SetStateAction<LinkedinData | null>>;
  threadsData: ThreadsData | null;
  setThreadsData: Dispatch<SetStateAction<ThreadsData | null>>;
  spotifyData: SpotifyData | null;
  setSpotifyData: Dispatch<SetStateAction<SpotifyData | null>>;
  redditData: RedditData | null;
  setRedditData: Dispatch<SetStateAction<RedditData | null>>;
}

interface PhotoData {
  type: string;
  url: string;
}
interface VideoData {
  videoVariants: {
    content_type: string;
    url: string;
    bitrate: number;
  }[];
}

interface UserData {
  description: string;
  screen_name: string;
  profile: string;
}

export interface MediaData {
  user: UserData;
  error: string;
  errors: {
    message: string;
  };
  created_at: string;
  media: {
    video: VideoData | null;
    photo: PhotoData[] | null;
  };
}

export interface FacebookData {
  title: string;
  thumbnail: string;
  links: {
    DownloadLowQuality: string;
    DownloadHighQuality: string;
  }[];
  media: {
    sd_url: string;
    hd_url: string;
    type: string;
    image: string;
  }[];
}

export interface TwitterData {
  video: string;
  music: string;
  cover: string;
  description: string;
  OriginalWatermarkedVideo: string;
  errors: string;
}

export interface InstgramData {
  title: string;
  images: string[];
  links: {
    quality: string;
    link: string;
  }[];
  picture: string;
  success: boolean;
}

export interface ThreadsData {
  creator: string;
  result: {
    image_urls: string[];
    video_urls?: {
      download_url: string;
    }[];
  };
}

export interface SpotifyData {
  thumbnail: string;
  title: string;
  medias: {
    url: string;
    extension?: string;
    type?: string;
    quality?: string;
  }[];
}

export interface LinkedinData {
  "@type"?: string;
  image: {
    title?: string;
    description?: string;
    url?: string;
  };
  thumbnailUrl?: string;
  description?: string;
  name: string;
  contentUrl: string;
  articleBody?: string;
}

export interface RedditData {
  title: string;
  thumbnail: string;
  medias: {
    type: string;
    format: string;
    url: string;
    extension: string;
  }[];
}
