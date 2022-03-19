import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { Button, Item, List, ModelName, Section } from "./styled";


const ModelsList = ({ modelsList }) => {
  console.log(modelsList)

  return (
    <Wrapper>
      <Header> Lista modeli</Header>

      <Section>
        <List>
          {modelsList.map( model => (
            <Item
              key={model.id}
            >
              <ModelName>{model.nazwa}</ModelName>
              <Button>Pokaż szczegóły</Button>
              <Button>Usuń model</Button>
            </Item>
          ))}
        </List>
      </Section>

    </Wrapper>
  );

};

export default ModelsList;