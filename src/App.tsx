import Header from "./components/Header";
import MainContent from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TwitterDownload from "./pages/TwitterDownload";
import FacebookDownload from "./pages/FacebookDownload";
import InstagramDownload from "./pages/InstagramDownload";
import TiktokDownload from "./pages/TiktokDownload";
import { Toaster } from "react-hot-toast";
import Download from "./pages/Download";
function App() {
  return (
    <>
      <BrowserRouter>
        <main className="min-h-screen flex flex-col items-center justify-center  dark:bg-[#000000]  transform  transition-all duration-300 ease-in-out bg-white px-7 pb-20 max-lg:px-3 ">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Download" element={<Download />} />
            <Route path="/Facebook" element={<FacebookDownload />} />
            <Route path="/Instagram" element={<InstagramDownload />} />
            <Route path="/Tiktok" element={<TiktokDownload />} />
            <Route path="/Twitter" element={<TwitterDownload />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </BrowserRouter>
    </>
  );
}

export default App;
