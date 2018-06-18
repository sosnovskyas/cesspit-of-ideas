import * as React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { ITask, TTaskUuid } from "../../modules/tasks/tasks-types";

interface ITasksCardsListItemProps {
  readonly task: ITask;
  onItemOpen(uuid: TTaskUuid): void;
}
export default function TasksCardsListItem(
  props: ITasksCardsListItemProps
): React.ReactElement<ITasksCardsListItemProps> {
  const { title, uuid } = props.task;
  const onOpen = () => props.onItemOpen(uuid);
  const media =
    Math.random() > 0.5 ? null : (
      <CardMedia
        style={{
          height: 0,
          paddingTop: "56.25%" // 16:9
        }}
        image="https://habrastorage.org/files/a82/c07/77b/a82c0777b3b44c5ead0f6b391e953967.jpg"
        title="Contemplative Reptile"
      />
    );

  return (
    <Card>
      {media}
      <CardContent>
        <Typography color="textSecondary">Some text</Typography>
        <Typography noWrap variant="title">
          {title}
        </Typography>
        <Typography color="textSecondary">Secondary text</Typography>
        <Typography>
          Some long long logn description for example. May be short disclaimer,
          or anything more
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onOpen} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
