import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center container m-auto pt-4  dark:text-white">
      <div>
        <h1 className="text-3xl font-[900] text-[#111827] dark:text-white">
          UNU
        </h1>
      </div>
      <Navbar />
    </div>
  );
};
export default Header;
