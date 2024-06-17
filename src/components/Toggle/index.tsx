import { useTheme } from "../../context/ThemeContext";
// import { IoMenu } from "react-icons/io5";
const Toggle = () => {
  const { handleChangeTheme, theme } = useTheme();
  return (
    <section className="w-full flex lg:items-end justify-end gap-5 max-lg:items-center">
      <section className="h-7 w-12 relative rounded-full bg-[#ee8c1e]">
        <div
          onClick={handleChangeTheme}
          className={`absolute h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out  bg-[white] rounded-full top-1  ${
            theme ? "translate-x-6" : "translate-x-1"
          }`}
        ></div>
      </section>
      {/* <IoMenu className="max-xl:visible xl:hidden text-3xl text-black cursor-pointer dark:text-white" /> */}
    </section>
  );
};

export default Toggle;
