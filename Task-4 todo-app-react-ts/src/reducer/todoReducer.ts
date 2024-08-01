import { Todo, Action } from "../types";

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TASK":
      console.log(action.payload);
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task) => task.id != action.payload);
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id == action.payload.id ? action.payload : task
      );
    default:
      return state;
  }
};

export default todoReducer;
