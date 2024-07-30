import { useState } from "react";
import Designmodal from "./designmodal";
import { CiMenuBurger } from "react-icons/ci";
const Modal = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button
        className="md:hidden"
        onClick={() => {
          modal ? setModal(false) : setModal(true);
          console.log(modal);
        }}
      >
        <CiMenuBurger />
      </button>
      {modal ? <Designmodal /> : null}
    </>
  );
};
export default Modal;
