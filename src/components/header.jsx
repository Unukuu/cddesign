import { MdOutlineWbSunny } from "react-icons/md";
const atags = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Testimonials", link: "#Testimonials" },
  { name: "Contact", link: "#Contact" },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center container m-auto mt-4">
      <div>
        <h1 className="text-3xl font-[900] text-[#111827]">UNU</h1>
      </div>
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
    </div>
  );
};
export default Header;
