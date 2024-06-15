const Navbar = () => {
  return (
    <>
      <ul className="flex items-center  justify-center gap-5 font-semibold  dark:text-white cursor-pointer text-lg text-black w-full max-xl:hidden">
        <li className="hover:text-[#e05f1e]">Twitter</li>
        <li className="hover:text-[#e05f1e]">Facebook</li>
        <li className="hover:text-[#e05f1e]">Instagram</li>
        <li className="hover:text-[#e05f1e]">Tiktok</li>
      </ul>
    </>
  );
};

export default Navbar;
