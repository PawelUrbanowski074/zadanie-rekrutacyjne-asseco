import { createSlice } from "@reduxjs/toolkit";
import { getModelsFromLocalStorage } from "./localStorage";

const modelsSlice = createSlice({
  name: "models",
  initialState:{
    models: getModelsFromLocalStorage(),
    loading: false,
    logged: false,
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
    fetchLogin: (state) => {
      state.logged = true;
    },
    fetchLogout: (state) => {
      state.logged = false;
    }
  },
});

export const {
  addModel, 
  removeModel,
  fetchExampleModels,
  fetchExampleModelsSuccess,
  fetchExampleModelsError,
  fetchLogin,
  fetchLogout
} = modelsSlice.actions;

const selectModelsState = state => state.models;

export const selectModels = state => selectModelsState(state).models;
export const selectExampleModelsLoading = state => selectModelsState(state).loading;
export const selectIsLogged = state => selectModelsState(state).logged;

export default modelsSlice.reducer;