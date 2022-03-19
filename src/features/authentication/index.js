import { Header } from "../../common/Header";
import { Arrow, Button, ButtonText, Field, Form, Input, Title, Wrapper } from "./styled";

const Authentications = () => (
  <>
    <Header>Logowanie</Header>
    <Wrapper>
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
    </Wrapper>
  </>
)

export default Authentications;