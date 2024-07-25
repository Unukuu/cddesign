import { RiGithubLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
const heroIcon = [
  <RiGithubLine />,
  <FaXTwitter />,
  <FaReact />,
  <RiNextjsLine />,
];
const Heroicon = () => {
  return (
    <div className="flex items-center gap-3 text-2xl text-gray-500 dark:text-white">
      {heroIcon.map((icon) => {
        return icon;
      })}
    </div>
  );
};
export default Heroicon;
