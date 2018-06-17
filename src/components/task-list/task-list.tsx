import * as React from "react";
import { CircularProgress, Typography, List, Grid } from "@material-ui/core";
import { TaskListItem } from "./task-list-item";
import { ITaskItem, TTaskUuid } from "../../modules/tasks/tasks-types";

export interface ITaskListProps {
  readonly tasks: ITaskItem[];
  onItemOpen?(uuid: TTaskUuid): void;
}

export default function TaskList(
  props: ITaskListProps
): React.ReactElement<ITaskListProps> {
  const { tasks } = props;

  if (!tasks) {
    return (
      <Typography variant="display1" color="primary">
        Loading
        <CircularProgress size={50} />
      </Typography>
    );
  } else if (tasks.length === 0) {
    return (
      <Typography variant="display1" color="primary">
        List is Empty
      </Typography>
    );
  }

  return (
    <List disablePadding>
      {props.tasks.map((item, index) => (
        <TaskListItem
          key={index}
          uuid={item.uuid}
          title={item.title}
          finished={item.finished}
          onItemOpen={props.onItemOpen}
        />
      ))}
    </List>
  );
}
