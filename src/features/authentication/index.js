import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper/index.js";
import { Arrow, Button, ButtonText, Container, Field, Form, Input, Title } from "../../common/Form";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../modelsSlice";

const Authentications = () => {
const dispatch = useDispatch();
  return (
    <Wrapper>
      <Header>Logowanie</Header>
      <Container>
        <Title>Zaloguj do serwisu</Title>
        <Form onSubmit={() => dispatch(fetchLogin())}>
          <Field>
            Login
            <Input required />
          </Field>
          <Field>
            Hasło
            <Input type="password" required />
          </Field>
          <Button>
            <ButtonText >Zaloguj</ButtonText>
            <Arrow>{'>'}</Arrow>
          </Button>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default Authentications;