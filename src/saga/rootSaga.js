import { all } from "redux-saga/effects";

import logHandler from "./logHandler";
import workerHandler from "./workerHandler";

export default function* rootSaga() {
  yield all([logHandler(), workerHandler()]);
}
