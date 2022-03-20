export function selectModelById(modelsList, modelId) {
  if (modelId) {
    const model = modelsList.find(element => element.id.toString() === modelId);
    return model;
  }
}