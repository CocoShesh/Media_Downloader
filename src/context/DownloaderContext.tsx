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
  link: string;
};

interface DownloadItem {
  title: string;
  picture: string;
  links: DownloadLink[];
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
