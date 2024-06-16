import { createContext, useContext, useState, ReactNode } from "react";
import {
  MediaData,
  DownloaderContextType,
  FacebookData,
  InstgramData,
  TwitterData,
} from "../utils/Types";

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
  const [fData, setFData] = useState<FacebookData | null>(null);
  const [instaData, setInstaData] = useState<InstgramData | null>(null);
  const [tiktokData, setTiktokData] = useState<TwitterData | null>(null);
  const [ytData, setYtData] = useState<InstgramData | null>(null);
  return (
    <DownloaderContext.Provider
      value={{
        selectedType,
        setSelectedType,
        data,
        setData,
        setFData,
        fData,
        instaData,
        setInstaData,
        setTiktokData,
        tiktokData,
        setYtData,
        ytData,
      }}
    >
      {children}
    </DownloaderContext.Provider>
  );
};
