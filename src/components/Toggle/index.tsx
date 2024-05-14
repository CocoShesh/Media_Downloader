import { useTheme } from "../../context/ThemeContext";
const Toggle = () => {
  const { handleChangeTheme, theme } = useTheme();
  return (
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
  );
};

export default Toggle;
