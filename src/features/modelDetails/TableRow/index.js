import { Cell, Row } from "./styled";

const TableRow = ({title, property, colspan, bold}) => (
  <Row>
    <Cell colSpan={colspan} bold={bold}>{title}</Cell>
    {property ? 
    <Cell>{property}</Cell>
    : null  
  }
  </Row>
)

export default TableRow;