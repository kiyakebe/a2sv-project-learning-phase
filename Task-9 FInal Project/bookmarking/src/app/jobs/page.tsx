import AuthProvider from "@/auth/Provider";
import Link from "next/link";
import Jobs from "./Jobs";

const page = () => {

  // const session = useSession()
  // console.log("session sdhfjkhskdh", session)

  return (
    <AuthProvider>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col  ">
        <p className="text-2xl mb-5 font-bold w-3/4 md:w-1/2 text-center cl-slate-700 text-violet-700">
          You are being authenticated!
        </p>
        <h1 className="text-3xl md:text-5xl font-bold w-3/4 md:w-1/2 text-center cl-slate-700">
          No Post Yet!
        </h1>
        <Link
          className="bg-violet-700 text-slate-50 p-3 px-5 my-5 rounded-md"
          href="/api/auth/signout"
        >
          Logout
        </Link>
        <Jobs />
      </div>
    </AuthProvider>
  );
};

export default page;
