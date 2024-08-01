import { Category, TaskTime, Todo } from "../types";

const calculateDays = (date: string): number => {
  const [year, month, day] = date.split("-").map(Number);
  const target = new Date(year, month - 1, day);
  const current = new Date();

  target.setHours(0, 0, 0, 0);
  current.setHours(0, 0, 0, 0);

  const differenceMs: number = target.getTime() - current.getTime();
  const days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  return days;
};

export const filterTodos = (
  tasks: Todo[],
  category: Category,
  dueDate: TaskTime
) => {
  const { categoryName } = category;
  const { date } = dueDate;

  if (categoryName == "ALL_TASKS" && date == "ALL_TASKS") {
    return tasks;
  } else if (
    categoryName == "PERSONAL_TASKS" ||
    categoryName === "WORK_TASKS"
  ) {
    if (date === "ALL_TASKS") {
      return tasks.map((task) => task.category === categoryName);
    } else {
      if (date == "TODAYS_TASKS") {
        return tasks.map(
          (task) =>
            task.category === categoryName && calculateDays(dueDate.date) === 0
        );
      } else {
        return tasks.map(
          (task) =>
            task.category === categoryName && calculateDays(dueDate.date) <= 7
        );
      }
    }
  }
};

export const extractEditableValue = (tasks: Todo[] | undefined, id: number | undefined): Todo => {

  if (tasks && id) {
    for (let i = 0; i < tasks?.length; i++) {
      if (tasks[i].id === id) {
        return tasks[i];
      }
    }
  }

  return {
    id: new Date().getTime(),
    taskName: "d",
    completed: false,
    date: new Date().getFullYear().toString(),
    category: "PERSONAL_TASKS",
  };
};
