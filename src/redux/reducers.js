import { combineReducers } from "redux";

import {
  SIGN_IN_USER,
  SIGN_OUT_USER,
  SEND_REQUEST,
  RECEIVE_REQUEST,
  ERROR_REQUEST
} from "./actions";

function userReducer(state = { user: {} }, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        user: action.user
      };
    case SIGN_OUT_USER: {
      return {
        ...state,
        user: {}
      };
    }
    default:
      return state;
  }
}

function requestReducer(state = { loading: false }, action) {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_REQUEST:
      return {
        ...state,
        loading: false,
        response: action.response
      };

    case ERROR_REQUEST:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export default combineReducers({ userReducer, requestReducer });
