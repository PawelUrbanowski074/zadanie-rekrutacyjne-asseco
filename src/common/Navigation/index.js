import { toModels, toNewModel } from "../../routes";
import { List, Item, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toModels()}>Lista Modeli</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toNewModel()}>Nowy model</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;