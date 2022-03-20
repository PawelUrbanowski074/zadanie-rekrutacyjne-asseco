import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { Arrow, Button, ButtonText, Container, Field, Form, Input, Title } from "../../common/Form";

const Authentications = () => (
  <Wrapper>
    <Header>Logowanie</Header>
    <Container>
      <Title>Zaloguj do serwisu</Title>
      <Form>
        <Field>
          Login
          <Input />
        </Field>
        <Field>
          Hasło
          <Input />
        </Field>
        <Button>
          <ButtonText>Zaloguj</ButtonText>
          <Arrow>{'>'}</Arrow>
        </Button>
      </Form>
    </Container>
  </Wrapper>
)

export default Authentications;