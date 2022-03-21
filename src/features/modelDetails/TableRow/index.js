import { Cell, Row } from "./styled";

const TableRow = ({title, property}) => (
  <Row>
    <Cell>{title}</Cell>
    <Cell>{property}</Cell>
  </Row>
)

export default TableRow;