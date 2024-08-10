import { useGetOpportunityByIdQuery } from "../features/api/apiSlice";
const AboutCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-center my-3">
      <div className="border p-2 rounded-full mr-5">
        <img src={icon} alt="" width={25} />
      </div>
      <div>
        <p className="text-slate-600 text-sm">{title}</p>
        <h3 className="font-semibold text-sm">{desc}</h3>
      </div>
    </div>
  );
};

const AboutJob = ({ id }: { id: string }) => {
  const { data: job } = useGetOpportunityByIdQuery(id);
  if (!job) return <></>;
  return (
    <div className="w-3/12 shrink-0 grow ">
      <div className="">
        <h1 className="text-2xl text-slate-900 font-bold mb-4">About</h1>

        <AboutCard
          title="Posted On"
          desc={new Date(job.data.createdAt).toDateString()}
          icon="/icons/postedate.png"
        />
        <AboutCard
          title="Deadline"
          desc={new Date(job.data.deadline).toDateString()}
          icon="/icons/deadline.png"
        />
        <AboutCard
          title="Location"
          desc={job.data.location.join(", ")}
          icon="/icons/location.png"
        />
        <AboutCard
          title="Start Date"
          desc={new Date(job.data.startDate).toDateString()}
          icon="/icons/date.png"
        />
        <AboutCard
          title="End Date"
          desc={new Date(job.data.endDate).toDateString()}
          icon="/icons/date.png"
        />
      </div>

      <div className="mt-10">
        <h1 className="text-2xl text-slate-900 font-bold mb-4">Categories</h1>
        <div className="space-y-3">
          {job.data.categories.map((item, index) => {
            return (
              <button
                key={index}
                className="px-4 py-1 mr-5 bg-orange-50 text-orange-500 text-sm"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl text-slate-900 font-bold mb-4">
          Required Skills
        </h1>
        <div className="space-y-3">
          {job.data.requiredSkills.map((item, index) => {
            return (
              <button
                key={index}
                className="px-4 py-1 mr-5 bg-violet-50 text-violet-500 text-sm"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutJob;
