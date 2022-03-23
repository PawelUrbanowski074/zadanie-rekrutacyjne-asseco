import { createSlice } from "@reduxjs/toolkit";
import { getIsLoggedFromLocalStorage, getModelsFromLocalStorage, saveIsLoggedInLocalStorage } from "./localStorage";

const obliczFraud = () => {
  alert("Tu następuje dokonanie obliczeń");
  const min = Math.ceil(0);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const modelsSlice = createSlice({
  name: "models",
  initialState:{
    models: getModelsFromLocalStorage(),
    loading: false,
    logged: getIsLoggedFromLocalStorage(),
  },
  reducers: {
    addModel: ({ models }, { payload: model }) => {
      models.push(model);
    },
    removeModel: ({ models }, {payload: modelId }) => {
      const index = models.findIndex(({ id }) => id === modelId);
      models.splice(index, 1);
    },
    calculateFrauds: ({models}, {payload: modelId}) => {
      const index = models.findIndex(({ id }) =>  id === modelId )

      models[index].wynik_fraud = obliczFraud();
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
      saveIsLoggedInLocalStorage(true);
    },
    fetchLogout: (state) => {
      state.logged = false;
      saveIsLoggedInLocalStorage(false);
    }
  },
});

export const {
  addModel, 
  removeModel,
  calculateFrauds,
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