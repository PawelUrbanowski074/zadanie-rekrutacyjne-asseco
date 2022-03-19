import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeclassname = "active";

export const List = styled.ul`
	background-color: white;
	list-style: none;
	margin: 0px;
	padding: 0px;
	display: flex;
	justify-content: center;
  box-shadow: 8px 8px 24px -20px rgba(66, 68, 90, 1);
`;

export const Item = styled.li`
	font-size: 26px;
	padding: 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
	activeclassname,
}))`
	color: #007834; 
	text-decoration: none;
	&.${activeclassname} {
		font-weight: bold;
    color: #025a28;
    border-bottom: 3px solid #025a28;
	}
`;