import styled from "styled-components";

export const Row = styled.tr`
background-color: #025a28;

&:nth-child(even) {
  filter: brightness(110%);
}

&:hover {
  filter: brightness(120%);
  border: 3px solid #02481f;
}
`;

export const Cell = styled.td`
border: 3px solid #02481f;
padding: 15px;
text-align: center;
vertical-align: middle;

@media(max-width: 767px) {
  padding: 10px; ;
}
`;