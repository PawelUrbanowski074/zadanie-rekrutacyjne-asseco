import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper";
import { Button, Container, Field, Form, Input, Option, Select, Title } from "../../common/Form";

const AddModel = () => {

  return (
    <Wrapper>
      <Header>Dodaj nowy model</Header>

      <Container big>
        <Title>Wprowadź dane:</Title>
        <Form>
          <Field equalGrid>
            Nazwa modelu:
            <Input />
          </Field>

          <Field equalGrid>
            Data:
            <Input type="date" />
          </Field>

          <Field equalGrid>
            Frakcja testowa:
            <Input type="number" min="0" step="0.1" />
          </Field>

          <Field equalGrid>
            N trees:
            <Input type="number" min="0" step="1" />
          </Field>

          <Field equalGrid>
            Głębokość interakcji:
            <Input type="number" min="0" step="1" />
          </Field>

          <Field equalGrid>
            Shrinkage:
            <Input type="number" min="0" step="0.001" />
          </Field>

          <Field equalGrid>
            N minobsinnode:
            <Input type="number" min="0" step="1" />
          </Field>

          <Field equalGrid>
            Cv folds:
            <Input type="number" min="0" step="1" />
          </Field>

          <Field equalGrid>
            Threshold:
            <Input type="number" min="0" step="0.1" />
          </Field>

          <Field equalGrid>
            Status:
            <Input as="select" >
              <Option default>New</Option>
              <Option>Corrupted</Option>
              <Option>Ready</Option>
              <Option>Staging</Option>
            </Input>
          </Field>

          <Field buttons>
            <Button type="submit" centerText>Wyślij model!</Button>
            <Button type="reset" centerText>Zresetuj formularz</Button>
          </Field>
        </Form>
      </Container>

    </Wrapper>
  );
}

export default AddModel;