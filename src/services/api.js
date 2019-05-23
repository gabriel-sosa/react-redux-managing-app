import {
  logUser,
  worker,
  workers,
  project,
  projects,
  notifications
} from "./mock";

export function logInUser(email, password) {
  return new Promise(res => setTimeout(() => res(logUser), 1000));
}

export function getWorker(firstName, lastName) {
  worker.name = {
    first: firstName,
    last: lastName
  };
  return new Promise(res => setTimeout(() => res(worker), 1000));
}

export function getWorkers() {
  return new Promise(res => setTimeout(() => res(workers), 1000));
}

export function getProject(name) {
  project.name = name;
  return new Promise(res => setTimeout(() => res(project), 1000));
}

export function getProjects() {
  return new Promise(res => setTimeout(() => res(projects), 1000));
}

export function getNotifications() {
  return new Promise(res => setTimeout(() => res(notifications), 1000));
}
