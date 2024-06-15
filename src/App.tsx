import Header from "./components/Header";
import MainContent from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TwitterDownload from "./pages/TwitterDownload";
import FacebookDownload from "./pages/FacebookDownload";
import InstagramDownload from "./pages/InstagramDownload";
import TiktokDownload from "./pages/TiktokDownload";

function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center  dark:bg-[#000000]  transform  transition-all duration-300 ease-in-out bg-white px-7 pb-20 max-lg:px-3 ">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Download" element={<TwitterDownload />} />
            <Route path="/Facebook" element={<FacebookDownload />} />
            <Route path="/Instagram" element={<InstagramDownload />} />
            <Route path="/Tiktok" element={<TiktokDownload />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
