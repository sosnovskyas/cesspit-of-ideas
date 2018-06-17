import * as Firebase from "firebase";
import { map } from "lodash";
import { store } from "../redux/redux-module";
import { taskListUpdated } from "./tasks-duck";

import { firebaseDb } from "../firebase/firebase-module";

export const tasksRef: Firebase.database.Reference = firebaseDb.ref("tasks");

tasksRef.on("value", (snapshot: Firebase.database.DataSnapshot) => {
  const tasksList = map(snapshot.val(), (item, index) => ({
    uuid: index,
    ...item
  }));

  store.dispatch(taskListUpdated(tasksList));
});
