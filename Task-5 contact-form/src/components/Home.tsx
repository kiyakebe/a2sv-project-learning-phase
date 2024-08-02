import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col bgImage bg-[url('../src/assets/bg.svg')] bg-no-repeat bg-cover bg-center ">
      <h1 className="text-3xl md:text-5xl font-bold w-3/4 md:w-1/2 text-center cl-slate-700">
        Effortlessly reach your audience with powerful email tools.
      </h1>
      <Link
        to={"/dashboard"}
        className="bg-violet-700 text-slate-50 p-3 px-5 my-5 rounded-md"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
