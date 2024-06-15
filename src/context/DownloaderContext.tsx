import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type PhotoData = {
  type: string;
  url: string;
};

type VideoData = {
  videoVariants: {
    content_type: string;
    url: string;
    bitrate: number;
  }[];
};

type UserData = {
  description: string;
  screen_name: string;
  profile: string;
};

export type MediaData = {
  user: UserData;
  created_at: string;
  media: {
    video: VideoData | null;
    photo: PhotoData[] | null;
  };
};

type DownloaderContextType = {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
  data: MediaData | null;
  setData: Dispatch<SetStateAction<MediaData | null>>;
};

type DownloaderProviderProps = {
  children: ReactNode;
};

const DownloaderContext = createContext<DownloaderContextType>(
  {} as DownloaderContextType
);

export const useDownloader = () => useContext(DownloaderContext);

export const DownloaderProvider = ({ children }: DownloaderProviderProps) => {
  const [selectedType, setSelectedType] = useState("");
  const [data, setData] = useState<MediaData | null>(null);

  return (
    <DownloaderContext.Provider
      value={{ selectedType, setSelectedType, data, setData }}
    >
      {children}
    </DownloaderContext.Provider>
  );
};
