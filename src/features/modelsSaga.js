import { 
  takeLatest, 
  call, 
  put, 
  delay, 
  takeEvery, 
  select 
} from "redux-saga/effects";

import {
  fetchExampleModels,
  selectModels,
  fetchExampleModelsSuccess,
  fetchExampleModelsError
} from "./modelsSlice";

import { getExampleModelList } from './getExampleModelList';
import { saveModelsInLocalStorage } from "./localStorage";

function* fetchExampleModelsHandler() {
  try {
    yield delay(1000);
    const exmapleModels = yield call(getExampleModelList);
    yield put(fetchExampleModelsSuccess(exmapleModels));
  } catch (error) {
    yield put(fetchExampleModelsError());
    yield call(alert, "Przykładowe modele nie zostały pobrane prawidłowo...");
  }
}

function* saveModelsInLocalStorageHandler() {
  const models = yield select(selectModels);
  yield call(saveModelsInLocalStorage, models);
}

export function* modelsSaga() {
  yield takeLatest(fetchExampleModels.type, fetchExampleModelsHandler);
  yield takeEvery("*", saveModelsInLocalStorageHandler);
};