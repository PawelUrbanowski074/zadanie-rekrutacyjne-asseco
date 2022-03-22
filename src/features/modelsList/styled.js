import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  margin: 10px 0;
  padding: 40px 20px;
  background: #007834;
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
  border-radius: 3px;
  color: white;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const Item = styled.li`
  font-size: 18px; 
  padding: 10px 0;
  border-bottom: solid 2px #025a28;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  word-break: break-word; 
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const ModelName = styled.span`
  padding: 0px 15px;

  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const ModelStatus = styled.span`
  padding: 0px 15px;
  flex-grow: 1;

  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 10px;
    flex-grow: 0;
  }
`;

export const Buttons = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const StyledLink = styled(Link)`
  color:  white; 
  text-decoration: none;
  transition: 0.3s;

  &:hover {
      filter: brightness(80%);
      cursor: pointer;
  }

  &:active {
      filter: brightness(70%);
  }
`;

export const Button = styled.button`
  color: white;
  border: none;
  justify-self: center;
  transition: 0.3s;
  background-color: #025a28;
  font-size: 16px; 
  padding: 5px 10px;
  border: 1px solid #025a28;
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 0px;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }
`;

