import { combineReducers } from "redux";

import {
  LOGIN_REQUEST,
  WORKER_REQUEST,
  WORKERS_REQUEST,
  PROJECT_REQUEST,
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

function workerHandler(state = {}, action) {
  switch (action.type) {
    case WORKER_REQUEST.SEND:
      return {
        loading: true
      };
    case WORKER_REQUEST.RECEIVE:
      return {
        loading: false,
        response: action.response
      };
    case WORKER_REQUEST.ERROR:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

function projectHandler(state = {}, action) {
  switch (action.type) {
    case PROJECT_REQUEST.SEND:
      return {
        loading: true
      };
    case PROJECT_REQUEST.RECEIVE:
      return {
        loading: false,
        response: action.response
      };
    case PROJECT_REQUEST.ERROR:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default combineReducers({
  logInHandler,
  workerHandler,
  workersHandler,
  projectHandler,
  projectsHandler,
  notificationsHandler
});
