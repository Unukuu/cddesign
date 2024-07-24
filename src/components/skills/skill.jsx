import Label from "../label";
import Logo from "./logo";
const Skills = () => {
  return (
    <section className="container mt-24 m-auto">
      <div className="flex items-center justify-center flex-col gap-4">
        <Label text="Skills" />
        <p className="text-[20px] text-gray-600 ">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <Logo />
    </section>
  );
};
export default Skills;
