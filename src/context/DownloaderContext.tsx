import { createContext, useContext, useState, ReactNode } from "react";
import { MediaData, DownloaderContextType } from "../utils/Types";

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
