import Label from "../label";
import { BsBoxArrowUpRight } from "react-icons/bs";

const WorkCard = ({ wobject, swap }) => {
  return (
    <div
      className={` flex w-[1440x] h-[480px] mt-12 ${
        swap ? "" : "flex-row-reverse"
      }`}
    >
      <div className="flex-1 bg-gray-100 flex items-center justify-center dark:bg-[#1F2937]">
        <img
          className="w-[480px] h-[384px] rounded-xl"
          src={wobject.image}
          alt=""
        />
      </div>
      <div className=" flex-1 p-12 flex flex-col gap-6 dark:bg-[#111827]">
        <h1 className="text-xl dark:text-white">UB Cab</h1>
        <p className="text-gray-600 dark:text-gray-400">{wobject.aboutweb}</p>
        <div className="flex flex-wrap gap-1">
          {wobject.usedskills.map((skill) => {
            return <Label text={skill} />;
          })}
        </div>
        <div className="text-2xl font-semibold dark:text-white">
          <BsBoxArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
