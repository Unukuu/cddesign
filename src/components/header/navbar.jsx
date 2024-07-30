import { useTheme } from "next-themes";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
const atags = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Testimonials", link: "#Testimonials" },
  { name: "Contact", link: "#Contact" },
];
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="md:flex items-center gap-6 dark:text-white hidden">
      <div className="flex gap-6 items-center text-gray-600 text-[16px] dark:text-white ">
        {atags.map((value) => {
          return <a href={value.link}>{value.name}</a>;
        })}
      </div>
      <div className="bg-gray-100 h-6 w-[1px]"></div>
      <div className="flex justify-center items-center gap-4">
        {theme === "light" ? (
          <button
            onClick={() => {
              setTheme("dark");
            }}
          >
            <MdOutlineWbSunny />
          </button>
        ) : (
          <button
            onClick={() => {
              setTheme("light");
            }}
          >
            <IoMoonOutline />
          </button>
        )}

        <button className="btn-primary dark:bg-white dark:text-black">
          Download CV
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
