import Navbar from "./navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Modal from "../modal/modal";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [modal, setModal] = useState(true);
  return (
    <div className="flex justify-between items-center container m-auto pt-4  dark:text-white relative">
      <div>
        <h1 className="text-3xl font-[900] text-[#111827] dark:text-white">
          UNU
        </h1>
      </div>
      <Modal />
      <Navbar />
    </div>
  );
};
export default Header;
