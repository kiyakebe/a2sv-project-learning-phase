export interface Todo {
  id: number;
  taskName: string;
  completed: boolean;
  date: string;
  category: string;
}

export interface Category {
  categoryName: "ALL_TASKS" | "PERSONAL_TASKS" | "WORK_TASKS";
}

export interface TaskTime {
  date: "ALL_TASKS" | "TODAYS_TASKS" | "WEEK_TASKS";
}

export type Action =
  | { type: "ADD_TASK"; payload: Todo }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "UPDATE_TASK"; payload: Todo }
  | { type: "UPDATE_STATUS"; payload: number };

export interface TodoContextType {
  tasks: Todo[] | undefined;
  dispatch: React.Dispatch<any>;
}

