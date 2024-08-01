import { useContext } from "react";
import DashboardContext from "../context/context";
import { TodoContextType } from "../types";

const useTodoContext = (): TodoContextType => {
  const contextValue = useContext(DashboardContext);

  if (!contextValue) {
    throw new Error("useDahsboardContext must be used with the dahsboard");
  } else if (!contextValue.tasks) {
    throw new Error("useDahsboardContext must be used with the dahsboard");
  }

  return contextValue;
};

export default useTodoContext;
