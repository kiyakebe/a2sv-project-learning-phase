import EmailVerificationForm from "@/components/auth/EmailVerificationForm";
import Image from "next/image";

const page = ( {params}: {params: {email: string}} ) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 shrink-0 flex itels-center justify-center bg-white h-screen">
        <Image src="/otp.svg" alt="" width={400} height={400} />
      </div>
      <div className="w-1/2 shrink-0 ">
        <EmailVerificationForm email={params.email} />
      </div>
    </div>
  );
};

export default page;
