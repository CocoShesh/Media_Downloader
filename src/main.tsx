import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { DownloaderProvider } from "./context/DownloaderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DownloaderProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </DownloaderProvider>
  </React.StrictMode>
);
