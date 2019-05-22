import { all } from "redux-saga/effects";

import logHandler from "./logHandler";
import workerHandler from "./workerHandler";
import projectHandler from "./projectHandler";
import notificationHandler from "./notificationHandler";

export default function* rootSaga() {
  yield all([
    logHandler(),
    workerHandler(),
    projectHandler(),
    notificationHandler()
  ]);
}
