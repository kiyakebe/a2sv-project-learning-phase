import AboutJob from "@/components/AboutJob";
import Description from "@/components/Description";
import { JobDetail } from "@/type";

const JobsDetail = async ({ params }: { params: { id: string } }) => {
  const response: Promise<JobDetail> = await loader(params?.id);
  console.log("From details page getById", response)
  const data = (await response).data

  return (
    <>
      <div className="flex gap-28 p-14 mt-10">
        {data && <Description data={data} />}
        {data && <AboutJob data={data} />}
      </div>
    </>
  );
};

export default JobsDetail;

export const loader = async (id: string) => {
  const response = await fetch(
    `https://akil-backend.onrender.com/opportunities/${id}`
  );

  const data = await response.json();

  return data;
};
