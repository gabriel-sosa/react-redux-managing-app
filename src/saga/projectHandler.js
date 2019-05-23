import { put, takeLatest, all } from "redux-saga/effects";
import { notification } from "antd";

import {
  PROJECT_REQUEST,
  receiveProjectRequest,
  errorProjectRequest,
  PROJECTS_REQUEST,
  receiveProjectsRequest,
  errorProjectsRequest
} from "../redux/actions";
import { getProject, getProjects } from "../services/api";

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

function* watchProjects() {
  yield takeLatest(PROJECTS_REQUEST.SEND, projectsCall);
}

function* projectCall({ request }) {
  try {
    const data = yield getProject(request);
    yield put(receiveProjectRequest(data));
  } catch (err) {
    notification.open({
      message: "error getting project",
      description: err.statusText
    });
    yield put(errorProjectRequest(err));
  }
}

function* watchProject() {
  yield takeLatest(PROJECT_REQUEST.SEND, projectCall);
}

export default function* root() {
  yield all([watchProject(), watchProjects()]);
}
