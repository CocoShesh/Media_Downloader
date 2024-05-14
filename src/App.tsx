import useDownloader from "react-use-downloader";

function App() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl =
    "https://scontent.fath3-4.fna.fbcdn.net/v/t39.30808-6/441263542_875331677975423_6530867776316508376_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m1rweqXkGccQ7kNvgE7LTum&_nc_ht=scontent.fath3-4.fna&oh=00_AYB8u5J_MC98x2dSUDO2AOe7F61OAZotu9ctCwybzlxJBA&oe=6648F476&dl=1&dl=1";

  const filename = "image.png";

  return (
    <>
      <div className="App">
        <p>Download is in {isInProgress ? "in progress" : "stopped"}</p>
        <button onClick={() => download(fileUrl, filename)}>
          Click to download the file
        </button>
        <button onClick={() => cancel()}>Cancel the download</button>
        <p>Download size in bytes {size}</p>
        <label>Downloading progress:</label>
        <progress id="file" value={percentage} max="100" />
        <p>Elapsed time in seconds {elapsed}</p>
        {error && <p>possible error {JSON.stringify(error)}</p>}
      </div>
    </>
  );
}

export default App;
