import { firebaseDb } from "../firebase/firebase-module";
import { tasksRef } from "./tasks-module";
import { ITask } from "./tasks-types";

export function taskCreateRequest(title: string): Promise<void> {
  // Get a key
  var newTaskKey = tasksRef.push().key;

  // Write the new data simultaneously in the posts list and the user's post list.
  const updates: { [path: string]: ITask } = {};
  const path = `/tasks/${newTaskKey}`;

  updates[path] = {
    title,
    finished: false,
    specific: "",
    measurable: "",
    achievable: "",
    relevant: "",
    timeBound: ""
  };

  return firebaseDb.ref().update(updates);
}
