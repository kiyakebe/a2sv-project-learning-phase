import Link from "next/link";
import JobCard from "@/components/JobCard";
import datas from "@/data/jobs.json";

export default function Home() {

  const job_postings = datas.job_postings

  return (
    <main className="">
      <div className="flex justify-between items-center w-3/4 mx-auto mt-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Oppotunities</h1>
          <p className="text-slate-500 py-2">showing 73 results</p>
        </div>
        <div>
          <label htmlFor="sort" className="text-slate-500 pr-2">
            Sorted by:{" "}
          </label>
          <select
            name="sort"
            id="countries"
            className="bg-gray-50 text-slate-900 font-semibold text-sm rounded-lg p-2.5"
          >
            <option value="default"> Most Recent </option>
            <option value="title"> Title </option>
            <option value="title"> Organization </option>
          </select>
        </div>
      </div>

      {job_postings.map((data, index) => {
        return (
          <Link href={`/jobs/${data.title}`} key={index}>
            <JobCard
              title={data.title}
              logo={data.image}
              description={data.description}
              company={data.company}
              location={data.about.location}
            />
          </Link>
        );
      })}
    </main>
  );
}
