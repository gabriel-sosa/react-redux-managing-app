import { all } from "redux-saga/effects";

import logHandler from "./logHandler";
import workerHandler from "./workerHandler";
import projectHandler from "./projectHandler";

export default function* rootSaga() {
  yield all([logHandler(), workerHandler(), projectHandler()]);
}
