import { MdOutlineWbSunny } from "react-icons/md";
const atags = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Testimonials", link: "#Testimonials" },
  { name: "Contact", link: "#Contact" },
];
const Navbar = () => {
  return (
    <nav className="flex items-center gap-6">
      <div className="flex gap-6 items-center text-gray-600 text-[16px]">
        {atags.map((value) => {
          return <a href={value.link}>{value.name}</a>;
        })}
      </div>
      <div className="bg-gray-100 h-6 w-[1px]"></div>
      <div className="flex justify-center items-center gap-4">
        <button>
          <MdOutlineWbSunny />
        </button>
        <button className="btn-primary">Download CV</button>
      </div>
    </nav>
  );
};
export default Navbar;
