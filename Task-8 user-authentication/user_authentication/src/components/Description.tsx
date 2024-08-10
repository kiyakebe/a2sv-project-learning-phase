import { useGetOpportunityByIdQuery } from "../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../page/Loading";

const DescriptionCard = ({ description }: { description: string }) => {
  return (
    <div className="">
      <h1 className="text-2xl text-slate-800 font-bold mb-4 font-poppins">
        Description
      </h1>
      <p className="text-slate-700 m3-6 font-epilogue ">
        {description}
      </p>
    </div>
  );
};

const ResponsibilityCard = ({ resp }: { resp: string }) => {
  return (
    <div className="flex gap-3 items-center my-1">
      <img src="/icons/check.png" alt="" width={25}/>
      <p className="text-slate-700 font-epilogue">{resp}</p>
    </div>
  );
};

const ResponsibilityList = ({
  responsiblities,
}: {
  responsiblities: string[];
}) => {
  return (
    <div>
      <h1 className="text-2xl text-slate-800 font-bold mb-4">
        Responsibilities
      </h1>
      <div className="flex flex-col">
        {responsiblities.map((resp, index) => (
          <ResponsibilityCard resp={resp} key={index} />
        ))}
      </div>
    </div>
  );
};

const IdeaCandidate = ({ ideal_candidate }: { ideal_candidate: string }) => {
  return (
    <div>
      <h1 className="text-2xl text-slate-800 font-bold mb-2">
        Ideal Candidate
      </h1>

      <p className="font-epilogue">{ideal_candidate}</p>
    </div>
  );
};

const Time = ({ when_where }: { when_where: string }) => {
  return (
    <div className="">
      <h1 className="text-2xl text-slate-800 font-bold mb-3">When and Where</h1>
      <div className="flex items-center">
        <div className="border p-2 rounded-full mr-3">
          <img src="/icons/location.png" alt="" width={30}/>
        </div>
        <p className="font-epilogue text-lg">{when_where}</p>
      </div>
    </div>
  );
};

const Description = ({ id }: { id: string }) => {
  const { isLoading, isError, data: job } = useGetOpportunityByIdQuery(id);
  const navigate = useNavigate()

  if (isLoading) return <Loading />;
  if (isError) navigate('/notfound');

  return (
    <>
      {job && (
        <div className="w-9/12 space-y-10">
          <DescriptionCard description={job.data.description} />
          <ResponsibilityList
            responsiblities={job.data.responsibilities.split("\n")}
          />
          <IdeaCandidate ideal_candidate={job.data.idealCandidate} />
          <Time when_where={job.data.whenAndWhere} />
        </div>
      )}
    </>
  );
};

export default Description;
