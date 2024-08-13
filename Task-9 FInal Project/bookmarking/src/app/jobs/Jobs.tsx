"use client";
import JobCard from "@/components/JobCard";
import { Opportunity } from "@/type";
import { signOut } from "next-auth/react";

const Jobs = ({ jobs }: { jobs: Opportunity[] }) => {
  const jobs_cnt = jobs.length;
  // console.log(jobs)

  return (
    <main className="">
      <div className="flex items-center justify-between w-3/4 mx-auto mt-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Oppotunities</h1>
          <p className="py-2 text-slate-500">showing {jobs_cnt} results</p>
        </div>
        <div>
          <label htmlFor="sort" className="pr-2 text-slate-500">
            Sorted by:
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

          <button
            onClick={() => signOut()}
            className="bg-violet-700 text-slate-50 p-2 ml-3 px-5 my-5 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>

      {jobs ? (
        jobs.map((item, index) => {
          return (
            <JobCard
              key={index}
              id={item.id}
              isBookmarked={item.isBookmarked}
              title={item.title}
              logoUrl={item.logoUrl}
              description={item.description}
              orgName={item.orgName}
              location={item.location}
            />
          );
        })
      ) : (
        <div>No Jobs Found</div>
      )}
    </main>
  );
};

export default Jobs;
