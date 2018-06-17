import { SagaIterator } from "redux-saga";
import { call, takeEvery } from "redux-saga/effects";
import { ITaskAddAction, TASKS_ITEM_ADD } from "./tasks-duck";
import { taskCreateRequest } from "./tasks-requests";

export function* taskItemAddWorker(action: ITaskAddAction): SagaIterator {
  yield call(taskCreateRequest, action.title);
}

export function* tasksSaga(): SagaIterator {
  yield takeEvery(TASKS_ITEM_ADD, taskItemAddWorker);
}
