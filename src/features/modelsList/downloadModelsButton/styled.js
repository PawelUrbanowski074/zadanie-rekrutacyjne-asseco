import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 8px 10px;
  color: #283754;
  background-color: #fab856;
  border: 2px solid #fab856;
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:active {
    border: 2px solid #283754;
  }

  &:hover {
    background: #283754;
    color: #fab856;
  }
`;