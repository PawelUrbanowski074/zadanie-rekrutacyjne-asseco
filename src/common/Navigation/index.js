import { useDispatch } from "react-redux";
import { fetchLogout } from "../../features/modelsSlice";
import { toModels, toNewModel } from "../../routes";
import { Button } from "../Form";
import { List, Item, StyledNavLink, LogOut, ItemContainer } from "./styled";

const Navigation = () => {

  const dispatch = useDispatch();
  return (
    <nav>
      <List>
        <ItemContainer>
          <Item>
            <StyledNavLink to={toModels()}>Lista Modeli</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={toNewModel()}>Nowy model</StyledNavLink>
          </Item>
        </ItemContainer>
        <LogOut >
          <Button onClick={() => dispatch(fetchLogout()) } >Wyloguj</Button>
        </LogOut>
      </List>

    </nav>
  );
};

export default Navigation;