import { put, takeEvery, all } from "redux-saga/effects";
import { notification } from "antd";

import { recieveRequest, errorRequest, SEND_REQUEST } from "../redux/actions";
import { logInUser } from "../services/api";

export function* helloSagas() {
  console.log("hello sagas");
}

function* asyncCall({ request }) {
  try {
    const data = yield logInUser(request.userName, request.password);
    data.email = request.username;
    yield put(recieveRequest(data));
  } catch (err) {
    notification.open({
      message: "login error",
      description: err.statusText
    });
    yield put(errorRequest(err));
  }
}

function* watchAsync() {
  yield takeEvery(SEND_REQUEST, asyncCall);
}

export default function* rootSaga() {
  yield all([helloSagas(), watchAsync()]);
}
