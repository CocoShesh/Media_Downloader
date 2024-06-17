import Toggle from "../Toggle";
const Header = () => {
  return (
    <>
      <header className="w-full px-10  py-7 flex items-center justify-between 2xl:w-[1500px] max-lg:px-2">
        <section className="w-full">
          <a href="/">
            <h1 className="font-bold text-2xl  text-[#230056] dark:text-white ">
              Soc<span className="text-[#e05f1e]">Downloader</span>
            </h1>{" "}
          </a>
        </section>
        <Toggle />
      </header>
    </>
  );
};

export default Header;
