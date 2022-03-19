export const toModels = () => "/modelsList";
export const toNewModel = () => "/addNewModel";

export const toModel = ({ id } = { id: ":id" }) => `/modelsList/${id}`;