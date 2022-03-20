import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { Link } from "react-router-dom";

import { Button, Item, List, ModelName, Section, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { removeModel, selectModels } from "../modelsSlice";


const ModelsList = () => {

  const modelsList = useSelector( state => selectModels(state));
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header> Lista modeli</Header>

      <Section>
        <List>
          {modelsList.map(model => (
            <Item
              key={model.id}
            >
              <ModelName>
                <StyledLink to={`modelsList/${model.id}`}>{model.nazwa}</StyledLink>
              </ModelName>
              <Link to={`modelsList/${model.id}`}>
                <Button>Pokaż szczegóły</Button>
              </Link>
              <Button
                onClick={() => dispatch(removeModel(model.id))}
              >Usuń model</Button>
            </Item>
          ))}
        </List>
      </Section>

    </Wrapper>
  );

};

export default ModelsList;