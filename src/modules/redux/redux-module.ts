import { createStore, applyMiddleware, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import tasks from "../tasks/tasks-duck";
import { tasksSaga } from "../tasks/tasks-saga";
import { IApplicationState } from "./redux-types";

const reducers: Reducer<IApplicationState> = combineReducers({
  tasks
});

export const sagaMiddleware = createSagaMiddleware();
const configureStore = () =>
  createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
      // other store enhancers if any
    )
  );

export const store = configureStore();

sagaMiddleware.run(tasksSaga);
