import { IdealCandidate, JobDetail } from "@/types";
import Image from "next/image";

const DescriptionCard = ({ description }: { description: string }) => {
  return (
    <div className="">
      <h1 className="text-3xl text-slate-800 font-bold mb-4 font-poppins">
        Description
      </h1>
      <p className="text-slate-700 m3-6 text-lg font-epilogue ">{description}</p>
    </div>
  );
};

const ResponsibilityCard = ({ resp }: { resp: string }) => {
  return (
    <div className="flex gap-3 items-center my-1">
      <Image
        src="/icons/check.png"
        alt="."
        width={15}
        height={15}
        className="shrink-0"
      />
      <p className="text-slate-700 text-lg font-epilogue">{resp}</p>
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
      <h1 className="text-3xl text-slate-800 font-bold mb-4">
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

const IdeaCandidate = ({ age, gender, traits, title }: IdealCandidate) => {
  return (
    <div>
      <h1 className="text-3xl text-slate-800 font-bold mb-2">
        Ideal Candidate we
      </h1>

      <ul className="list-disc ml-4 text-slate-700">
        <li className="font-semibold my-1 font-epilogue text-lg">{`Young (${age} years old) ${gender} ${title}`}</li>
        {traits.map((text, index) => {
          let resl = text.split(":");
          return (
            <li className="my-1 font-epilogue text-lg" key={index}>
              <span className="font-semibold text-slate-900">{resl[0]}</span>
              {": "}
              {resl.length > 0 && resl[1]}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Time = ({ when_where }: { when_where: string }) => {
  return (
    <div className="">
      <h1 className="text-3xl text-slate-800 font-bold mb-3">When and Where</h1>
      <div className="flex items-center">
        <div className="border p-2 rounded-full mr-3">
          <Image
            src="/icons/location.png"
            alt="."
            width={25}
            height={20}
            className="shrink-0"
          />
        </div>
        <p className="font-epilogue text-lg">{when_where}</p>
      </div>
    </div>
  );
};

const Description = ({ data }: { data: JobDetail }) => {
  return (
    <div className="w-9/12 space-y-10">
      <DescriptionCard description={data.description} />
      <ResponsibilityList responsiblities={data.responsibilities} />
      <IdeaCandidate
        age={data.ideal_candidate.age}
        gender={data.ideal_candidate.gender}
        traits={data.ideal_candidate.traits}
        title={data.title}
      />
      <Time when_where={data.when_where} />
    </div>
  );
};

export default Description;
