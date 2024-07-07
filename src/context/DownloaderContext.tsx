import { createContext, useContext, useState, ReactNode } from "react";
import {
  MediaData,
  DownloaderContextType,
  FacebookData,
  InstgramData,
  TwitterData,
  ThreadsData,
  SpotifyData,
  LinkedinData,
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
  const [linkData, setLinkData] = useState<LinkedinData | null>(null);
  const [threadsData, setThreadsData] = useState<ThreadsData | null>(null);
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);

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
        setLinkData,
        linkData,
        setThreadsData,
        threadsData,
        setSpotifyData,
        spotifyData,
      }}
    >
      {children}
    </DownloaderContext.Provider>
  );
};
