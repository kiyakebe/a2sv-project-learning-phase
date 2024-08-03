import { About } from "@/types";
import Image from "next/image";

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
        <Image
          src={`/icons/${icon}.png`}
          alt="."
          width={25}
          height={25}
          className="shrink-0"
        />
      </div>
      <div>
        <p className="text-slate-600 text-sm">{title}</p>
        <h3 className="font-semibold text-sm">{desc}</h3>
      </div>
    </div>
  );
};

const AboutJob = ({ about }: { about: About }) => {
  return (
    <div className="w-3/12 shrink-0 grow ">
      <div className="">
        <h1 className="text-2xl text-slate-900 font-bold mb-4">About</h1>
        <AboutCard title="Posted On" desc={about.posted_on} icon="postedate" />
        <AboutCard title="Deadline" desc={about.deadline} icon="deadline" />
        <AboutCard title="Location" desc={about.location} icon="location" />
        <AboutCard title="Start Date" desc={about.start_date} icon="date" />
        <AboutCard title="End Date" desc={about.end_date} icon="date" />
      </div>

      <div className="mt-10">
        <h1 className="text-2xl text-slate-900 font-bold mb-4">Categories</h1>
        <div className="space-y-3">
          {about.categories.map((item, index) => {
            return (
              <button key={index} className="px-4 py-1 mr-5 bg-orange-50 text-orange-500 ">
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
          {about.required_skills.map((item, index) => {
            return (
              <button key={index} className="px-4 py-1 mr-5 bg-violet-50 text-violet-500">
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
