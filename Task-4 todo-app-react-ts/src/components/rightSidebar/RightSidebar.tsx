const TodoStatus = () => {
  return <div className="width-[1/1] bg-slate-800 rounded-md m-4 h-64"></div>;
};

const RightSidebar = () => {
  return (
    <div className="w-[20rem] bg-slate-100 flex-shrink-0">
      <TodoStatus />
      <TodoStatus />
    </div>
  );
};

export default RightSidebar;
