import AuthProvider from "@/auth/Provider";
import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 shrink-0 flex itels-center justify-center bg-white h-screen">
        <Image
          src="/signup.svg"
          alt=""
          width={400}
          height={400}
          priority={false}
        />
      </div>
      <div className="w-1/2 shrink-0">
        <AuthProvider>
          <SignupForm />
        </AuthProvider>
      </div>
    </div>
  );
};

export default page;
