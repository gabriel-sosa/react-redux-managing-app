import { combineReducers } from "redux";

import {
  LOGIN_REQUEST,
  WORKERS_REQUEST,
  PROJECTS_REQUEST,
  NOTIFICATIONS_REQUEST
} from "./actions";

function logInHandler(state = { loading: false }, action) {
  switch (action.type) {
    case LOGIN_REQUEST.SEND:
      return {
        loading: true
      };
    case LOGIN_REQUEST.RECIVE:
      return {
        loading: false,
        response: action.response
      };

    case LOGIN_REQUEST.ERROR:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

function workersHandler(
  state = { loading: false, response: { workers: [] } },
  action
) {
  switch (action.type) {
    case WORKERS_REQUEST.SEND:
      return {
        ...state,
        loading: true
      };
    case WORKERS_REQUEST.RECIVE:
      return {
        loading: false,
        response: action.response
      };
    case WORKERS_REQUEST.ERROR:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

function projectsHandler(
  state = { loading: false, response: { projects: [] } },
  action
) {
  switch (action.type) {
    case PROJECTS_REQUEST.SEND:
      return {
        ...state,
        loading: true
      };
    case PROJECTS_REQUEST.RECIVE:
      return {
        loading: false,
        response: action.response
      };
    case PROJECTS_REQUEST.ERROR:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

function notificationsHandler(
  state = { loading: false, response: { notifications: [] } },
  action
) {
  switch (action.type) {
    case NOTIFICATIONS_REQUEST.SEND:
      return {
        ...state,
        loading: true
      };
    case NOTIFICATIONS_REQUEST.RECEIVE:
      return {
        response: action.response,
        loading: false
      };
    case NOTIFICATIONS_REQUEST.ERROR:
      return {
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export default combineReducers({
  logInHandler,
  workersHandler,
  projectsHandler,
  notificationsHandler
});
