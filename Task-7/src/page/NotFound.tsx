import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src="/404.svg" alt="" width={600}/>
      <Link to={"/"}>Got to Home</Link>
    </div>
  )
}

export default NotFound
