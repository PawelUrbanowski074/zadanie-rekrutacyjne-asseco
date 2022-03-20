import { all } from "redux-saga/effects";
import { modelsSaga } from "./features/modelsSaga";


export default function* rootSaga() {
  yield all([
    modelsSaga(),
  ]);
}