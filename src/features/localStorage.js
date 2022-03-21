const localStorageKey = "models";

export const saveModelsInLocalStorage = models => localStorage.setItem(localStorageKey, JSON.stringify(models));

export const getModelsFromLocalStorage = () => JSON.parse(localStorage.getItem(localStorageKey)) || 
  [];