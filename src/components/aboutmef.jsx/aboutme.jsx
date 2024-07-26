import Label from "../label";
import Abtext from "./abtext";

const Aboutme = () => {
  return (
    <section className="bg-gray-50 py-24 dark:bg-[#111827] dark:text-white">
      <div className="container m-auto">
        <div className="flex items-center justify-center">
          <Label text="About me" />
        </div>
        <div className="flex justify-between mt-12">
          <div className="h-[520px] w-[440px] border-white border-8 dark:border-black bg-cover bg-[url('/image/workingcoding.avif')] shadow-[40px_40px_#E5E7EB] dark:shadow-[40px_40px_#374151]"></div>
          <Abtext />
        </div>
      </div>
    </section>
  );
};
export default Aboutme;
