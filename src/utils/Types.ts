import { Dispatch, SetStateAction } from "react";

export interface PhotoData {
  type: string;
  url: string;
}

export interface VideoData {
  videoVariants: {
    content_type: string;
    url: string;
    bitrate: number;
  }[];
}

export interface UserData {
  description: string;
  screen_name: string;
  profile: string;
}

export type MediaData = {
  user: UserData;
  created_at: string;
  media: {
    video: VideoData | null;
    photo: PhotoData[] | null;
  };
};

export type DownloaderContextType = {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
  data: MediaData | null;
  setData: Dispatch<SetStateAction<MediaData | null>>;
};
