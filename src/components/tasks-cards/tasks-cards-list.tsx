import * as React from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { ITaskItem, TTaskUuid } from "../../modules/tasks/tasks-types";
import TasksCardsListItem from "./tasks-cards-list-item";

interface ITasksCardsListProps {
  readonly tasks: ITaskItem[];
  onItemOpen(uuid: TTaskUuid): void;
}

export default function TasksCardsList(
  props: ITasksCardsListProps
): React.ReactElement<ITasksCardsListProps> {
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
    <Grid container spacing={8}>
      {tasks.map((task, index) => (
        <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={4}>
          <TasksCardsListItem task={task} onItemOpen={props.onItemOpen} />
        </Grid>
      ))}
    </Grid>
  );
}
