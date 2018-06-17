import { Paper, Tooltip } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import * as React from "react";
import DoneIcon from "@material-ui/icons/Done";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { TTaskUuid } from "../../modules/tasks/tasks-types";

export interface ITaskListItemProps {
  readonly uuid: TTaskUuid;
  readonly title: string;
  readonly finished: boolean;
  onItemOpen?(uuid: TTaskUuid): void;
}

export function TaskListItem(
  props: ITaskListItemProps
): React.ReactElement<ITaskListItemProps> {
  const { uuid, finished, title, onItemOpen } = props;
  const onOpen = () => onItemOpen(uuid);

  const isDone = finished ? (
    <Tooltip title={'Done'}>
      <ListItemIcon>
        <DoneIcon />
      </ListItemIcon>
    </Tooltip>
  ) : null;

  return (
    <Paper>
      <ListItem button onClick={onOpen}>
        {isDone}
        <ListItemText
          inset
          primary={title}
          secondary={"some secondary title "}
        />
      </ListItem>
    </Paper>
  );
}
