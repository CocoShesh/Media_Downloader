// import useDownloader from "react-use-downloader";

import Header from "./components/Header";
import MainContent from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TwitterDownload from "./pages/TwitterDownload";

function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center  dark:bg-[#000000]  transform  transition-all duration-300 ease-in-out bg-white px-7 pb-20 max-lg:px-3 ">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Download" element={<TwitterDownload />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
