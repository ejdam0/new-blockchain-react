import { Task } from "./Task.js";

export interface AppState {
  darkStyle: boolean;
  account: string;
  taskCount: number;
  tasks: Task[];
}
