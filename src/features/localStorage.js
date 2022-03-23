const localStorageKey = "models";
const loggedInKey = "loggedIn"; 

export const saveModelsInLocalStorage = models => localStorage.setItem(localStorageKey, JSON.stringify(models));

export const getModelsFromLocalStorage = () => JSON.parse(localStorage.getItem(localStorageKey)) || [];

  export const saveIsLoggedInLocalStorage = isLogged => localStorage.setItem(loggedInKey, JSON.stringify(isLogged));

  export const getIsLoggedFromLocalStorage = () => JSON.parse(localStorage.getItem(loggedInKey)) || false;