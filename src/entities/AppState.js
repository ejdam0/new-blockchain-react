import { Task } from "./Task.js";

export interface AppState {
  account: string;
  taskCount: number;
  tasks: Task[];
}
