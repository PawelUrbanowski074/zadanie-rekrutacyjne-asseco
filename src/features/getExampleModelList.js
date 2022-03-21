export const getExampleModelList = async () => {
  const response = await fetch(`/zadanie-rekrutacyjne-asseco//exampleModelList.json`);
  if(!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
}