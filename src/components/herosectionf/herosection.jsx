import Heroimg from "./heroimg";
import Herotext from "./herotext";
const Herosection = () => {
  return (
    <section className="container m-auto flex justify-between py-24">
      <Herotext />
      <Heroimg />
    </section>
  );
};
export default Herosection;