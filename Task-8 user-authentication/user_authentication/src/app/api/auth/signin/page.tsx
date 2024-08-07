import AuthProvider from "@/auth/Provider";
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 shrink-0 flex itels-center justify-center bg-white h-screen">
        <Image src="/login.svg" alt="" width={400} height={400} />
      </div>
      <div className="w-1/2 shrink-0 ">
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </div>
    </div>
  );
};

export default page;
