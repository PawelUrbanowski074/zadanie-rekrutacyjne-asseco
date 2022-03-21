import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { selectModels } from "../modelsSlice";
import { selectModelById } from "./selectModelById";
import { Caption, Table, TableCell, TableContainer, TableRow } from "./styled";

const ModelDetails = () => {

  const modelsList = useSelector(state => selectModels(state));
  const { id } = useParams();
  const model = selectModelById(modelsList, id);
  return (
    <Wrapper>
      <Header>Model: {model.nazwa} </Header>
      <TableContainer>
        <Table>
          <Caption>Właściowści modelu:</Caption>

          <tbody>
            <TableRow>
              <TableCell>Nazwa modelu:</TableCell>
              <TableCell>{model.nazwa}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Data:</TableCell>
              <TableCell>{model.data_na}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Frakcja Testowa:</TableCell>
              <TableCell>{model.frakcja_testowa}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>N trees:</TableCell>
              <TableCell>{model.n_trees}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Głębokość interakcji:</TableCell>
              <TableCell>{model.interaction_depth}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Shrinkage:</TableCell>
              <TableCell>{model.shrinkage}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>N minobsinnode:</TableCell>
              <TableCell>{model.n_minobsinnode}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>CV Folds:</TableCell>
              <TableCell>{model.cv_folds}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Threshold:</TableCell>
              <TableCell>{model.threshold}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Status:</TableCell>
              <TableCell>{model.status}</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </TableContainer>
    </Wrapper>
  )
}

export default ModelDetails;