import Heroimg from "./heroimg";
import Herotext from "./herotext";
const Herosection = () => {
  return (
    <section className="container m-auto md:flex-row md:justify-between py-24  dark:text-white items-center justify-center flex flex-col-reverse gap-12">
      <Herotext />
      <Heroimg />
    </section>
  );
};
export default Herosection;
