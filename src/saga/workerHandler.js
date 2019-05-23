import { put, takeLatest, all } from "redux-saga/effects";
import { notification } from "antd";

import {
  WORKER_REQUEST,
  recieveWorkerRequest,
  errorWorkerRequest,
  WORKERS_REQUEST,
  recieveWorkersRequest,
  errorWorkersRequest
} from "../redux/actions";
import { getWorker, getWorkers } from "../services/api";

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

function* watchWorkers() {
  yield takeLatest(WORKERS_REQUEST.SEND, workersCall);
}

function* workerCall({ request }) {
  try {
    const data = yield getWorker(request.firstName, request.lastName);
    yield put(recieveWorkerRequest(data));
  } catch (err) {
    notification.open({
      message: "error getting worker",
      description: err.statusText
    });
    yield put(errorWorkerRequest(err));
  }
}

function* watchWorker() {
  yield takeLatest(WORKER_REQUEST.SEND, workerCall);
}

export default function* root() {
  yield all([watchWorkers(), watchWorker()]);
}
