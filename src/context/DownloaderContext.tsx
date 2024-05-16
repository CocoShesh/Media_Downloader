import { useContext, createContext, useState, ReactNode } from "react";

type DownloadData = {
  response: {
    resolution: string;
    url: string;
  };
};
type DownloaderContextType = {
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  data: DownloadData | null;
  setData: React.Dispatch<React.SetStateAction<DownloadData | null>>;
};

type DownloaderProviderProps = {
  children: ReactNode;
};

const DownloaderContext = createContext<DownloaderContextType>({
  selectedType: "",
  setSelectedType: () => {},
  data: null,
  setData: () => {},
});

export const useDownloader = () => {
  return useContext(DownloaderContext);
};

export const DownloaderProvider = ({ children }: DownloaderProviderProps) => {
  const [selectedType, setSelectedType] = useState("");
  const [data, setData] = useState<DownloadData | null>(null);

  return (
    <DownloaderContext.Provider
      value={{ selectedType, setSelectedType, setData, data }}
    >
      {children}
    </DownloaderContext.Provider>
  );
};
