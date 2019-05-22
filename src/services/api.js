import { logUser, workers, projects } from "./mock";

export function logInUser(email, password) {
  return new Promise(res => setTimeout(() => res(logUser), 1000));
}

export function getWorkers() {
  return new Promise(res => setTimeout(() => res(workers), 1000));
}

export function getProjects() {
  return new Promise(res => setTimeout(() => res(projects), 1000));
}
