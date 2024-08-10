import AboutJob from "@/components/AboutJob";
import Description from "@/components/Description";

const JobsDetail = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="flex gap-28 p-14 mt-10">
        {params && <Description id={params.id} />}
        {params && <AboutJob id={params.id} />}
      </div>
    </>
  );
};

export default JobsDetail;
