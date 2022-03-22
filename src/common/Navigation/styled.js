import styled, {css} from "styled-components";
import { NavLink } from "react-router-dom";

const activeclassname = "active";

export const List = styled.ul`
	background-color: #007834;
	list-style: none;
	margin: 0px;
	padding: 0px;
	display: flex;
	justify-content: center;
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
`;

export const ItemContainer = styled.div`
	margin: 0 auto;
	display: flex;
`;

export const Item = styled.li`
	font-size: 26px;
	padding: 20px;
`;


export const LogOut = styled.li`
	padding: 10px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
	activeclassname,
}))`
	color: white; 
	text-decoration: none;
	&.${activeclassname} {
		font-weight: bold;
    color: white;
    border-bottom: 3px solid white;
	}
`;