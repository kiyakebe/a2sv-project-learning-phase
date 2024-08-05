import { useParams } from "react-router-dom";
import AboutJob from "../components/AboutJob";
import Description from "../components/Description";

const JobsDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="flex gap-28 p-14 mt-10">
        {id && <Description id={id} />}
        {id && <AboutJob id={id} />}
      </div>
    </>
  );
};

export default JobsDetail;
