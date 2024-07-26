import WorkCard from "./work-card";
import { workobject } from "./work-data";

const WorkList = () => {
  return (
    <div>
      {workobject.map((wobject, i) => (
        <WorkCard wobject={wobject} swap={i % 2 === 0} />
      ))}
    </div>
  );
};
export default WorkList;
