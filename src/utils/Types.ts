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
}
