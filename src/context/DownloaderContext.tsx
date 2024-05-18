import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type DownloadLink = {
  quality: string;
  url: string;
  extension: string;
};

interface DownloadItem {
  title: string;
  picture: string;
  medias: DownloadLink[];
  thumbnail: string;
  sd: string;
  hd: string;
}

type DownloaderContextType = {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
  data: DownloadItem | null;
  setData: Dispatch<SetStateAction<DownloadItem | null>>;
};

type DownloaderProviderProps = {
  children: ReactNode;
};

const DownloaderContext = createContext({} as DownloaderContextType);

export const useDownloader = () => {
  return useContext(DownloaderContext);
};

export const DownloaderProvider = ({ children }: DownloaderProviderProps) => {
  const [selectedType, setSelectedType] = useState("");
  const [data, setData] = useState<DownloadItem | null>(null);

  return (
    <DownloaderContext.Provider
      value={{ selectedType, setSelectedType, data, setData }}
    >
      {children}
    </DownloaderContext.Provider>
  );
};
