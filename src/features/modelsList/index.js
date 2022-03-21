import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { Link } from "react-router-dom";

import { Button, Buttons, Item, List, ModelName, ModelStatus, Section, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { removeModel, selectModels } from "../modelsSlice";
import DownloadModelsButton from "./downloadModelsButton";


const ModelsList = () => {

  const modelsList = useSelector(state => selectModels(state));
  const dispatch = useDispatch();
  console.log(modelsList);
  return (
    <Wrapper>
      <Header> Lista modeli</Header>

      <Section>
        <DownloadModelsButton />
        <List>
          {modelsList.map(model => (
            <Item
              key={model.id}
            >
              <ModelName>
                <StyledLink to={`modelsList/${model.id}`}>{model.nazwa}</StyledLink>
              </ModelName>
              <ModelStatus>
                Status: {model.status}
              </ModelStatus>
              <Buttons>
                <Link to={`modelsList/${model.id}`}>
                  <Button>Pokaż szczegóły</Button>
                </Link>
                <Button
                  onClick={() => dispatch(removeModel(model.id))}
                >
                  Usuń model
                </Button>
              </Buttons>
            </Item>
          ))}
        </List>
      </Section>

    </Wrapper>
  );

};

export default ModelsList;