import { put, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import {
  PROJECTS_REQUEST,
  receiveProjectsRequest,
  errorProjectsRequest
} from "../redux/actions";
import { getProjects } from "../services/api";

function* projectsCall() {
  try {
    const data = yield getProjects();
    yield put(receiveProjectsRequest(data));
  } catch (err) {
    notification.open({
      message: "error getting projects",
      description: err.statusText
    });
    yield put(errorProjectsRequest(err));
  }
}

export default function* watchProjects() {
  yield takeLatest(PROJECTS_REQUEST.SEND, projectsCall);
}
