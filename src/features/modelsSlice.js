import { createSlice } from "@reduxjs/toolkit";
import { getModelsFromLocalStorage } from "./localStorage";

const modelsSlice = createSlice({
  name: "models",
  initialState:{
    // models: getModelsFromLocalStorage(),
    models: [
      {
        "id": 1,
        "nazwa": "model_ko.1.01.007",
        "data_na": "2020-03-13",
        "frakcja_testowa": 0.3,
        "n_trees": 5,
        "interaction_depth": 10,
        "shrinkage": 0.035,
        "n_minobsinnode": 15,
        "cv_folds": 2,
        "threshold": 0.5,
        "status": "ready"
      },
      {
        "id": 2,
        "nazwa": "model_ko.1.01.008",
        "data_na": "2020-03-14",
        "frakcja_testowa": 0.4,
        "n_trees": 6,
        "interaction_depth": 11,
        "shrinkage": 0.045,
        "n_minobsinnode": 20,
        "cv_folds": 3,
        "threshold": 0.6,
        "status": "new"
      }
    ],
    loading: false,
  },
  reducers: {
    addModel: ({ models }, { payload: model }) => {
      models.push(model);
    },
    removeModel: ({ models }, {payload: modelId }) => {
      const index = models.findIndex(({ id }) => id === modelId);
      models.splice(index, 1);
    },
    fetchExampleModels: state => {
      state.loading = true;
    },
    fetchExampleModelsSuccess: (state, { payload: models }) => {
      state.models = models;
      state.loading = false;
    },
    fetchExampleModelsError: state => {
      state.loading = false;
    },
  },
});

export const {
  addModel, 
  removeModel,
  fetchExampleModels,
  fetchExampleModelsSuccess,
  fetchExampleModelsError
} = modelsSlice.actions;

const selectModelsState = state => state.models;

export const selectModels = state => selectModelsState(state).models;

export default modelsSlice.reducer;