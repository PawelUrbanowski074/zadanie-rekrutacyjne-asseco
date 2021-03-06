import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 20px 40px;
  background-color: #007834;
  border-radius: 3px;
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);

  ${({ big }) => big && css`
    max-width: 800px;
  `}

  @media( max-width: 767px) {
    margin: 30px auto;
    padding: 10px 20px;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 32px;
  border-bottom: 2px solid #02481f;

  @media( max-width: 767px) {
    font-size: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media (max-width: 767px) {
    margin: 0 20px;
  }
`;

export const Field = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr; 
  grid-gap: 20px;
  color: white;
  font-size: 22px;
  margin-bottom: 20px;

  ${({ moreText }) => moreText && css`
    grid-template-columns: 2fr 1fr;
  `}

  ${({ buttons }) => buttons && css`
    grid-template-columns: 1fr 1fr;

  `}
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;

    ${({ buttons }) => buttons && css`
      grid-template-columns: 1fr 1fr;
    `}
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: #025a28;
  color: white;
  padding: 5px 20px;
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

  ${({ centerText }) => centerText && css`
    text-align: center;
    display: inline;
  `}

  &:active {
    border: 2px solid #283754;
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

export const Option = styled.option`
  background-color:  #025a28;
`;
