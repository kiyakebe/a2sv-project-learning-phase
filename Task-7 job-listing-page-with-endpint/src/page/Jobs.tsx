import { Link, useNavigate } from "react-router-dom";
import { useGetAllOpportunityQuery } from "../features/api/apiSlice";
import JobCard from "../components/JobCard";
import Loading from "./Loading";

export default function Home() {
  const { data: jobs, isLoading, isError } = useGetAllOpportunityQuery();
  const navigate = useNavigate();
  const jobs_cnt = jobs?.data.length;
  if (isLoading) return <Loading />;
  if (isError) navigate("/notfound");

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
