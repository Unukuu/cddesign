import { CiLocationOn } from "react-icons/ci";
import Heroicon from "./heroicon";
const Herotext = () => {
  return (
    <div className="flex flex-1 flex-col gap-12">
      <div className="">
        <h1 className="text-[60px] font-[700]">Hi, I’m UNU 👋</h1>
        <p className="text-[16px] text-gray-600 dark:text-white">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
      </div>
      <div className="flex  flex-col justify-start items-start">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 flex items-center justify-center">
            <CiLocationOn />
          </div>
          Ulaanbaatar, Mongolia
        </div>
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 flex items-center justify-center">
            <div className="w-[8px] h-[8px] rounded-full bg-[#10B981]"></div>
          </div>
          Available for new projects
        </div>
      </div>
      <Heroicon />
    </div>
  );
};
export default Herotext;
