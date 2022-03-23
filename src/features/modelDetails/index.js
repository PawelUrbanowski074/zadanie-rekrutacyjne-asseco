import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { selectModels } from "../modelsSlice";
import { selectModelById } from "./selectModelById";
import { Button, TableTitle, Container, Table, TableContainer } from "./styled";
import TableRow from "./TableRow";
import { calculateFrauds } from "../modelsSlice";
import { FraudResult } from "./FraudResult";

const ModelDetails = () => {

  const modelsList = useSelector(state => selectModels(state));
  const { id } = useParams();
  const model = selectModelById(modelsList, id);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>Model: {model.nazwa} </Header>
      <Container>
        <TableTitle>
          Właściowści modelu:
        </TableTitle>
        <a href={process.env.PUBLIC_URL + "/report.html"} >
          <Button >Wyświetl raport</Button>
        </a>
        <a href={process.env.PUBLIC_URL + "/report.html"} download={process.env.PUBLIC_URL + "/report.html"}>
          <Button >Pobierz raport</Button>
        </a>
      </Container>
      <TableContainer>
        <Table>
          <tbody>
            <TableRow title="Data:" property={model.data_na} />
            <TableRow title="Frakcja testowa:" property={model.frakcja_testowa} />
            <TableRow title="N trees" property={model.n_trees} />
            <TableRow title="Głębokość interakcji:" property={model.interaction_depth} />
            <TableRow title="Shrinkage:" property={model.shrinkage} />
            <TableRow title="N minobsinnode:" property={model.n_minobsinnode} />
            <TableRow title="CV Folds:" property={model.cv_folds} />
            <TableRow title="Threshold:" property={model.threshold} />
            <TableRow title="Status:" property={model.status} />
          </tbody>
        </Table>
      </TableContainer>

      <Container>
        <TableTitle>
          Cechy modelu:
        </TableTitle>
        <Button onClick={() => dispatch(calculateFrauds(model.id))}>Wywołaj predykcję</Button>
      </Container>
        {
          model.wynik_fraud !== 0 ? <FraudResult>Wynik predykcji: {model.wynik_fraud}</FraudResult> : null
        }
      <TableContainer>
        <Table>
          <tbody>
            {model.cechy_all.map(cecha => (
              <TableRow title={cecha.klucz} property={cecha.wartosc} key={nanoid()} />
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Wrapper>
  )
}

export default ModelDetails;