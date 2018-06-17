import {
  AppBar,
  createStyles,
  Grid,
  GridList,
  IconButton,
  Paper,
  Theme,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import {
  TaskList,
  TaskCreate,
  TaskDialog,
  TasksCardsList
} from "../../components";
import { store } from "../../modules/redux/redux-module";
import { IApplicationState } from "../../modules/redux/redux-types";
import {
  ITasksState,
  taskAdd,
  taskClose,
  taskOpen
} from "../../modules/tasks/tasks-duck";
import { TTaskUuid } from "../../modules/tasks/tasks-types";

interface IAppContainerProps {
  readonly tasks: ITasksState;
  classes: {
    root: string;
    paper: string;
    button: string;
  };
}

const onItemOpen = (uuid: TTaskUuid) => store.dispatch(taskOpen(uuid));
const onItemClose = () => store.dispatch(taskClose());
const onItemCreate = (title: string) => store.dispatch(taskAdd(title));

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex"
    }
  });

const renderer = withStyles(styles)(
  (props: IAppContainerProps): React.ReactElement<IAppContainerProps> => {
    const { items, dialog } = props.tasks;

    return (
      <React.Fragment>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="display1" color="inherit">
              {"cesspit of ideas"}
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container direction="column" spacing={8}>
          <Grid item>

              <TaskCreate onClick={onItemCreate} />
          </Grid>
          <Grid item>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6}>
                <TaskList tasks={items} onItemOpen={onItemOpen} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TasksCardsList tasks={items} onItemOpen={onItemOpen} />
              </Grid>
            </Grid>
          </Grid>
          <TaskDialog
            isOpen={dialog.isOpen}
            onClose={onItemClose}
            task={items && items.find(task => task.uuid === dialog.selected)}
          />
        </Grid>
      </React.Fragment>
    );
  }
);

const selector = (state: IApplicationState) => ({
  tasks: state.tasks
});

export default connect(selector)(renderer);
