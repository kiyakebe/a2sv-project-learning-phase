import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/404.svg" alt="" width={500}/>
      <Link to={"/jobs"} className="text-violet-700 mt-5">Got to Jobs</Link>
    </div>
  )
}

export default NotFound
