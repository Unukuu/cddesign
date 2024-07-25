import Label from "../label";
import Cards from "./cards";
const Experience = () => {
  return (
    <div className="bg-gray-50">
      <section className="container m-auto py-24 ">
        <div className="flex items-center justify-center flex-col gap-4">
          <Label text="Experience" />
          <p className="text-[20px] text-gray-600 ">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <Cards />
      </section>
    </div>
  );
};
export default Experience;
