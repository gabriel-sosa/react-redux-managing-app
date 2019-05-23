import { put, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import {
  NOTIFICATIONS_REQUEST,
  receiveNotificationsRequest,
  errorNotificationsRequest
} from "../redux/actions";
import { getNotifications } from "../services/api";

function* projectsCall() {
  try {
    const data = yield getNotifications();
    yield put(receiveNotificationsRequest(data));
  } catch (err) {
    notification.open({
      message: "error getting notifications",
      description: err.statusText
    });
    yield put(errorNotificationsRequest(err));
  }
}

export default function* watchProjects() {
  yield takeLatest(NOTIFICATIONS_REQUEST.SEND, projectsCall);
}
