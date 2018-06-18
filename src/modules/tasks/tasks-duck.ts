import { guid } from "../../helpers";
import { ITask, TTaskUuid } from "./tasks-types";

/*
* CONSTANTS
* */
export const TASKS_LIST_UPDATED: "TASKS_LIST_UPDATED" = "TASKS_LIST_UPDATED";
export const TASKS_ITEM_ADD: "TASKS_ITEM_ADD" = "TASKS_ITEM_ADD";
export const TASKS_ITEM_OPEN: "TASKS_ITEM_OPEN" = "TASKS_ITEM_OPEN";
export const TASKS_ITEM_CLOSE: "TASKS_ITEM_CLOSE" = "TASKS_ITEM_CLOSE";
export const TASKS_ITEM_REMOVE: "TASKS_ITEM_REMOVE" = "TASKS_ITEM_REMOVE";
export const TASKS_ITEM_CHANGE: "TASKS_ITEM_CHANGE" = "TASKS_ITEM_CHANGE";
export const TASKS_ITEM_SAVE: "TASKS_ITEM_SAVE" = "TASKS_ITEM_SAVE";

/*
* ACTIONS
* */
export interface ITaskListUpdatedAction {
  readonly type: typeof TASKS_LIST_UPDATED;
  readonly list: {}[];
}
export interface ITaskAddAction {
  readonly type: typeof TASKS_ITEM_ADD;
  readonly title: string;
}
export interface ITaskOpenAction {
  readonly type: typeof TASKS_ITEM_OPEN;
  readonly uuid: TTaskUuid;
}
export interface ITaskCloseAction {
  readonly type: typeof TASKS_ITEM_CLOSE;
}
export interface ITaskRemoveAction {
  readonly type: typeof TASKS_ITEM_REMOVE;
  readonly uuid: TTaskUuid;
}
export interface ITaskChangeAction {
  readonly type: typeof TASKS_ITEM_CHANGE;
  readonly uuid: TTaskUuid;
}
export interface ITaskSaveAction {
  readonly type: typeof TASKS_ITEM_SAVE;
  readonly task: ITask;
}

export type TTasksAction =
  | ITaskListUpdatedAction
  | ITaskAddAction
  | ITaskOpenAction
  | ITaskCloseAction
  | ITaskRemoveAction
  | ITaskChangeAction
  | ITaskSaveAction;

export const taskListUpdated = (list: ITask[]): ITaskListUpdatedAction => ({
  type: TASKS_LIST_UPDATED,
  list
});
export const taskAdd = (title: string): ITaskAddAction => ({
  type: TASKS_ITEM_ADD,
  title
});
export const taskRemove = (uuid: TTaskUuid): ITaskRemoveAction => ({
  type: TASKS_ITEM_REMOVE,
  uuid
});
export const taskOpen = (uuid: TTaskUuid): ITaskOpenAction => ({
  type: TASKS_ITEM_OPEN,
  uuid
});
export const taskClose = (): ITaskCloseAction => ({
  type: TASKS_ITEM_CLOSE
});
export const taskSave = (task: ITask): ITaskSaveAction => ({
  type: TASKS_ITEM_SAVE,
  task
});

/*
* REDUCER
* */

export interface ITasksDialog extends Partial<ITask> {
  readonly isOpen: boolean;
  readonly selected?: TTaskUuid;
}
export interface ITasksState {
  readonly items: ITask[];
  readonly dialog: ITasksDialog;
}

const defaultTasksState: ITasksState = {
  items: undefined,
  dialog: {
    isOpen: false
  }
};

export default function reducer(
  state: ITasksState = defaultTasksState,
  action: TTasksAction
) {
  switch (action.type) {
    case TASKS_ITEM_OPEN: {
      return {
        ...state,
        dialog: {
          isOpen: true,
          selected: action.uuid
        }
      };
    }
    case TASKS_ITEM_CLOSE: {
      return {
        ...state,
        dialog: {
          isOpen: false
        }
      };
    }
    case TASKS_LIST_UPDATED: {
      const { list } = action;

      return {
        ...state,
        items: list
      };
    }
    case TASKS_ITEM_REMOVE: {
      const items = state.items.filter(item => item.uuid !== action.uuid);

      return {
        ...state,
        items
      };
    }
    case TASKS_ITEM_CHANGE: {
      const items =
        state.items &&
        state.items.map(
          item =>
            item.uuid === action.uuid
              ? { ...item, finished: !item.finished }
              : item
        );

      return {
        ...state,
        items
      };
    }

    default:
      return state;
  }
}
