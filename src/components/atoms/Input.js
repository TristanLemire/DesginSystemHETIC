import React from "react";
import styled from "styled-components";
import { colors, fontType, space, radius } from "../../styles/const";

export const Input = ({ type, placeholder, callback }) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      onChange={(event) => callback(event.target.value)}
    />
  );
};

const InputWrapper = styled.input`
  border-radius: ${radius.lg};
  border-color: transparent;
  background-color: ${colors.neutral.lighter};
  display: block;
  padding: ${space.base};
  width: 100%;
  color: ${colors.font.dark};
  font-size: ${fontType.regular.fontSize};
  font-weight: ${fontType.regular.fontWeight};
  letter-spacing: ${fontType.regular.letterSpacing};
  line-height: ${fontType.regular.lineHeight};
  font-style: ${fontType.regular.fontStyle};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.font.grey};
    font-size: ${fontType.input.fontSize};
    font-weight: ${fontType.input.fontWeight};
    letter-spacing: ${fontType.input.letterSpacing};
    line-height: ${fontType.input.lineHeight};
    font-style: ${fontType.input.fontStyle};
  }
`;
