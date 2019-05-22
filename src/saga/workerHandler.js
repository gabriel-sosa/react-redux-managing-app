import { put, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import {
  WORKERS_REQUEST,
  recieveWorkersRequest,
  errorWorkersRequest
} from "../redux/actions";
import { getWorkers } from "../services/api";

function* workersCall() {
  try {
    const data = yield getWorkers();
    yield put(recieveWorkersRequest(data));
  } catch (err) {
    notification.open({
      message: "error getting workers",
      description: err.statusText
    });
    yield put(errorWorkersRequest(err));
  }
}

export default function* watchWorkers() {
  yield takeLatest(WORKERS_REQUEST.SEND, workersCall);
}
