
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img src="/loading.svg" alt="" height={300} className="grow-0"/>
      <h1 className="text-violet-700 mt-5">Loading...</h1>
    </div>
  )
}

export default Loading
