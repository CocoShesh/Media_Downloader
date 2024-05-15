import { useContext, createContext, useState, ReactNode } from "react";

type DownloaderContextType = {
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
};

type DownloaderProviderProps = {
  children: ReactNode;
};

const DownloaderContext = createContext<DownloaderContextType>({
  selectedType: "",
  setSelectedType: () => {},
});

export const useDownloader = () => {
  return useContext(DownloaderContext);
};

export const DownloaderProvider = ({ children }: DownloaderProviderProps) => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <DownloaderContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </DownloaderContext.Provider>
  );
};
