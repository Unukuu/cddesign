import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center container m-auto mt-4">
      <div>
        <h1 className="text-3xl font-[900] text-[#111827]">UNU</h1>
      </div>
      <Navbar />
    </div>
  );
};
export default Header;
