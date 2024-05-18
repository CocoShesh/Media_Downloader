import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type MediaData = {
  title: string;
  thumbnail_url: string;
  sd: string;
  hd: string;
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

const DownloaderContext = createContext({} as DownloaderContextType);

export const useDownloader = () => {
  return useContext(DownloaderContext);
};

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
