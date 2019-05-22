import { put, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import {
  recieveLogInRequest,
  errorLogInRequest,
  LOGIN_REQUEST
} from "../redux/actions";
import { logInUser } from "../services/api";

function* logCall({ request }) {
  try {
    const data = yield logInUser(request.email, request.password);
    data.email = request.email;
    yield put(recieveLogInRequest(data));
  } catch (err) {
    notification.open({
      message: "login error",
      description: err.statusText
    });
    yield put(errorLogInRequest(err));
  }
}

export default function* watchLog() {
  yield takeLatest(LOGIN_REQUEST.SEND, logCall);
}
