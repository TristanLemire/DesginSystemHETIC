import React from "react";
import styled from "styled-components";

export const Button = ({ text, isAction }) => {
  if (isAction) {
    return (
      <ButtonStyled>
        <button>{text}</button>
      </ButtonStyled>
    );
  }
  return (
    <ButtonStyled>
      <a>{text}</a>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background: bleu;
`;
