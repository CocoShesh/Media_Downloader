// import useDownloader from "react-use-downloader";

import Header from "./components/Header";
import MainContent from "./components/Main";

function App() {
  // const { size, elapsed, percentage, download, cancel, error, isInProgress } =
  //   useDownloader();

  // const fileUrl =
  //   "https://scontent.fath3-4.fna.fbcdn.net/v/t39.30808-6/441263542_875331677975423_6530867776316508376_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m1rweqXkGccQ7kNvgE7LTum&_nc_ht=scontent.fath3-4.fna&oh=00_AYB8u5J_MC98x2dSUDO2AOe7F61OAZotu9ctCwybzlxJBA&oe=6648F476&dl=1&dl=1";

  // const filename = "image.png";

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center ">
        <Header />
        <MainContent />
      </main>
    </>
  );
}

export default App;
