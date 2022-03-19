import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { Link } from "react-router-dom";

import { Button, Item, List, ModelName, Section, StyledLink } from "./styled";


const ModelsList = ({ modelsList }) => {
  console.log(modelsList)

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
              <Button>Usuń model</Button>
            </Item>
          ))}
        </List>
      </Section>

    </Wrapper>
  );

};

export default ModelsList;