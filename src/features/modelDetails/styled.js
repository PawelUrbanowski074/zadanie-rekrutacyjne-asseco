import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 30px 0 ;
  overflow-x: auto;

  @media(max-width: 767px) {
    margin: 20px 0;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: white;
  border: 3px solid #02481f;
  border-radius: 3px;
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
`;

export const Container = styled.div`
  color: white;
  background-color: #025a28;
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
  border: 3px solid #02481f;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 20px auto 0 auto;  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(max-width: 767px) {
    
  }
`;

export const TableTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  flex-grow: 1;
  text-align: left;
  
  @media(max-width: 767px) {
    margin: 5px;
  }
`;

export const Button = styled.button`
  background-color: #025a28;
  border: none;
  color: white;
  padding: 5px;
  margin: 0 5px;
  border-bottom: 1px solid white;
  border-radius: 3px;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  @media(max-width: 767px) {
    font-size: 16px;
    margin: 5px;
  }
`;