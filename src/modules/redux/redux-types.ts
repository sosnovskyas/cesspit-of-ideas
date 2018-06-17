import { ITasksState } from "../tasks/tasks-duck";

export interface IApplicationState {
  tasks: ITasksState;
}
