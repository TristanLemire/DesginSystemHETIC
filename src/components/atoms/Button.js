import React from "react";
import {
  colors,
  space,
  radius,
  borderWidth,
  fontType,
} from "../../styles/const.ts";
import styled from "styled-components";

export const Button = ({ text, isDisabled, handleClick, colorName }) => {
  const handleOnCLick = (event) => {
    event.preventDefault();
    handleClick();
  };

  const ButtonStyled = styled.button`
    background: ${colors[colorName || "secondary"].base};
    color: ${colors.font.white};
    font-size: ${fontType.textButton.fontSize};
    font-weight: ${fontType.textButton.fontWeight};
    letter-spacing: ${fontType.textButton.letterSpacing};
    line-height: ${fontType.textButton.lineHeight};
    font-style: ${fontType.textButton.fontStyle};
    padding: ${space.base} 0;
    width: 100%;
    border: none;
    border-radius: ${radius.xl};
    cursor: pointer;

    &:hover {
      background: ${colors[colorName || "secondary"].dark};
    }

    &:focus {
      border: ${borderWidth.base} solid ${colors[colorName || "secondary"].base};
      padding: calc(${space.base} - ${borderWidth.base}) 0;
      background: ${colors[colorName || "secondary"].dark};
    }

    &:disabled {
      background: ${colors[colorName || "secondary"].lighter};
    }
  `;

  return (
    <ButtonStyled disabled={isDisabled} onClick={handleOnCLick}>
      {text}
    </ButtonStyled>
  );
};
