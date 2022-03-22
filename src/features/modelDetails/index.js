import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { selectModels } from "../modelsSlice";
import { selectModelById } from "./selectModelById";
import { Button, TableTitle, Container, Table, TableContainer } from "./styled";
import TableRow from "./TableRow";

const ModelDetails = () => {

  const modelsList = useSelector(state => selectModels(state));
  const { id } = useParams();
  const model = selectModelById(modelsList, id);
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
            <TableRow title="Cechy modelu:" bold={"bold"} colspan="2"/>
            {model.cechy_all.map(cecha => (
              <TableRow title={cecha.klucz} property={cecha.wartosc} key={nanoid()}/>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Wrapper>
  )
}

export default ModelDetails;