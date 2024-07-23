import { CiLocationOn } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
const Herosection = () => {
  return (
    <section className="container m-auto flex justify-between mt-[112px]">
      <div className="flex flex-col gap-12">
        <div className="w-[600px]">
          <h1 className="text-[60px] font-[700]">Hi, I’m UNU</h1>
          <p className="text-[16px] text-gray-600">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start">
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
        <div className="flex items-center gap-3 text-2xl text-gray-500">
          <RiGithubLine />
          <FaXTwitter />
          <FaReact />
          <RiNextjsLine />
        </div>
      </div>

      <div className="h-[360px] w-80 bg-red-400"></div>
    </section>
  );
};
export default Herosection;
