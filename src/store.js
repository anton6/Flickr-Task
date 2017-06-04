import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  rootSaga.forEach((saga) =>
    sagaMiddleware.run(saga));

  return store;
};
