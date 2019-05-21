import { createStore, applyMiddleware, compose } from "redux";
import createSagasMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from "../saga/test";

const sagaMiddleware = createSagasMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
