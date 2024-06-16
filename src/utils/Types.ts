import { Dispatch, SetStateAction } from "react";

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
  errors: string;
  created_at: string;
  media: {
    video: VideoData | null;
    photo: PhotoData[] | null;
  };
}

export interface DownloaderContextType {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
  data: MediaData | null;
  setData: Dispatch<SetStateAction<MediaData | null>>;
  fData: FacebookData | null;
  setFData: Dispatch<SetStateAction<FacebookData | null>>;
  instaData: ImageItem | null;
  setInstaData: Dispatch<SetStateAction<ImageItem | null>>;
  setTiktokData: Dispatch<SetStateAction<TwitterData | null>>;
  tiktokData: TwitterData | null;
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
  error: string;
  errors: string;
}

export interface ImageItem {
  posts: {
    type: string;
    url: string;
    thumbnail: string;
  }[];
}

export interface TwitterData {
  video: string;
  music: string;
  cover: string;
  description: string;
  OriginalWatermarkedVideo: string;
}
