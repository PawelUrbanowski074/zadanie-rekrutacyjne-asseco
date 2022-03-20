import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 20px 40px;
  background-color: #007834;
  border-radius: 3px;
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
`;

export const Title = styled.h2`
  color: white;
  font-size: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr; 
  grid-gap: 20px;
  color: white;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background-color: #025a28;
  color: white;
  padding: 5px 10px;
  font-size: 16px;
  height: 40px;
  border-radius: 3px;
  border: 3px solid #02481f;

  &:focus {
    outline: 3px #fab856 solid!important;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const Button = styled.button`
  max-width: 300px;
  padding: 12px 20px;
  color: #283754;
  background-color: #fab856;
  border: 2px solid #fab856;
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-self: center;
  transition: all 0.3s ease-in-out;

  &:active {
    border: 2px solid #283754;
  }

  &:focus {
    background: #283754;
    color: #fab856;
    outline: 3px #fab856 solid!important;
    outline-offset: 0;
  }

  &:hover {
    background: #283754;
    color: #fab856;
  }
`;

export const ButtonText = styled.div`
  margin-right: 20px;
`;

export const Arrow = styled.div`

`;