export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export const SEND_REQUEST = "SEND_REQUEST";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const ERROR_REQUEST = "ERROR_REQUEST";

export function signIn(userName, password) {
  return {
    type: SIGN_IN_USER,
    user: {
      userName,
      password
    }
  };
}

export function signOut() {
  return {
    type: SIGN_OUT_USER
  };
}

export function sendRequest(request) {
  return {
    type: SEND_REQUEST,
    request
  };
}

export function recieveRequest(response) {
  return {
    type: RECEIVE_REQUEST,
    response
  };
}

export function errorRequest(error) {
  return {
    type: ERROR_REQUEST,
    error
  };
}
