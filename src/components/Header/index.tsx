import Navbar from "../Navbar";
import { useTheme } from "../../context/ThemeContext";
const Header = () => {
  const { handleChangeTheme, theme } = useTheme();
  return (
    <>
      <header className="w-full px-10  py-7 flex items-center justify-between 2xl:w-[1500px]">
        <section className="w-full">
          <h1 className="font-bold text-2xl  text-[#230056] ">
            Soc<span className="text-[#e05f1e]">Downloader</span>
          </h1>
        </section>
        <Navbar />
        <section className="w-full flex items-end justify-end">
          <section className="h-7 w-12 relative rounded-full bg-[#ee8c1e]">
            <div
              onClick={handleChangeTheme}
              className={`absolute h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out  bg-[white] rounded-full top-1  ${
                theme ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </section>
        </section>
      </header>
    </>
  );
};

export default Header;
