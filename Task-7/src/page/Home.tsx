import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col  ">
      <h1 className="text-3xl md:text-5xl font-bold w-3/4 md:w-1/2 text-center cl-slate-700">
        Effortlessly Find Oppotunities <br /> That Best Fits You.
      </h1>
      <Link
        to={"/jobs"}
        className="bg-violet-700 text-slate-50 p-3 px-5 my-5 rounded-md"
      >
        Get Started
      </Link>
    </div>
  );
}
