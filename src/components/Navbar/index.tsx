const Navbar = () => {
  return (
    <>
      <ul className="flex items-center  justify-center gap-5 font-semibold  dark:text-white cursor-pointer text-lg text-black w-full max-xl:hidden">
        <li className="hover:text-[#e05f1e]">About</li>
        <li className="hover:text-[#e05f1e]">FAQ</li>
        <li className="hover:text-[#e05f1e]">How it works</li>
        <li className="hover:text-[#e05f1e]">Features</li>
      </ul>
    </>
  );
};

export default Navbar;
