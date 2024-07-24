import Label from "../label";
import Abtext from "./abtext";

const Aboutme = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container m-auto">
        <div className="flex items-center justify-center">
          <Label text="About me" />
        </div>
        <div className="flex justify-between mt-12">
          <div className="h-[520px] w-[440px] bg-red-300"></div>
          <Abtext />
        </div>
      </div>
    </section>
  );
};
export default Aboutme;
