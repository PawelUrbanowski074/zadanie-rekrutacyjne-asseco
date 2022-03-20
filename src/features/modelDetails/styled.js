import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 50px;
  overflow-x: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: auto;
  color: white;
  border: 3px solid #02481f;
  border-radius: 3px;
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
`;

export const Caption = styled.caption`
  color: white;
  background-color: #025a28;
  text-align: left;
  margin: 15px 0px;
  padding: 10px 20px;
  border: 3px solid #02481f;
  border-radius: 3px;
  font-size: 22px;
  font-weight: bold;
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);

`;

export const TableRow = styled.tr`
  background-color: #025a28;

  &:nth-child(even) {
    filter: brightness(110%);
  }

  &:hover {
    filter: brightness(120%);
    border: 3px solid #02481f;
  }
`;

export const TableCell = styled.td`
  border: 3px solid #02481f;
  padding: 15px;
  text-align: center;
  vertical-align: middle;
`;