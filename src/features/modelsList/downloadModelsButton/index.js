import { useDispatch, useSelector } from "react-redux"
import { fetchExampleModels, selectExampleModelsLoading } from "../../modelsSlice"
import { Button } from "./styled";

const DownloadModelsButton = () => {
  const loading = useSelector(selectExampleModelsLoading);
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(fetchExampleModels())}
      disabled={loading}
    >
      {loading ? "Ładowanie..." : "Pobierz modele"}
    </Button>
  )
}

export default DownloadModelsButton;