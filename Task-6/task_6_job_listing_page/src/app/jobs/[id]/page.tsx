import AboutJob from "@/components/AboutJob";
import Description from "@/components/Description";
import { filterOpportunities } from "@/utils/helpers";

const page = async ({ params }: { params: { id: string } }) => {
  const filter = params.id.replace(/%20/g, " ");
  const data = await filterOpportunities(filter);
  
  return (
    <div className="flex gap-28 p-14 mt-10">
      {data && <Description data={data} />}
      {data && <AboutJob about={data?.about} />}
    </div>
  );
};

export default page;
