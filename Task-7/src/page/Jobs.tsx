import { Link } from "react-router-dom";
import { useGetAllOpportunityQuery } from "../features/api/apiSlice";
import JobCard from "../components/JobCard";

export default function Home() {
  const { data: jobs, isLoading, isError } = useGetAllOpportunityQuery();

  const jobs_cnt = jobs?.data.length;
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Server Error...</h1>;

  return (
    <main className="">
      <div className="flex justify-between items-center w-3/4 mx-auto mt-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Oppotunities</h1>
          <p className="text-slate-500 py-2">showing {jobs_cnt} results</p>
        </div>
        <div>
          <label htmlFor="sort" className="text-slate-500 pr-2">
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
        </div>
      </div>

      {jobs?.success === true ? (
        jobs.data.map((item, index) => {
          return (
            <Link to={`/jobs/${item.id}`} key={index}>
              <JobCard
                title={item.title}
                logoUrl={item.logoUrl}
                description={item.description}
                orgName={item.orgName}
                location={item.location}
              />
            </Link>
          );
        })
      ) : (
        <div>No Jobs Found</div>
      )}
    </main>
  );
}
