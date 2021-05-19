import React from "react";
import styled from "styled-components";

export const Button = ({ text, isAction, isDisabled, handleClick }) => {
  const handleOnCLick = (event) => {
    event.preventDefault();
    handleClick();
  };
  if (isAction) {
    return (
      <ButtonStyled disabled={isDisabled} onClick={handleOnCLick}>
        {text}
      </ButtonStyled>
    );
  }
  return <a>{text}</a>;
};

const ButtonStyled = styled.button`
  background: bleu;
`;
