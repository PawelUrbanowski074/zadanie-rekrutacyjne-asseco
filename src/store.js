import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga';
import modelsReducer from './features/modelsSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    models: modelsReducer, 
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;