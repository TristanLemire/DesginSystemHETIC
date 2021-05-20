import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { borderWidth, colors, radius, space } from "../../styles/const";
=======
import {colors, fontType, space, radius} from "../../styles/const"
>>>>>>> 8eeaff25b5980ef030227ffa9bec3b56bab19822

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
<<<<<<< HEAD
  border: none;
  background-color: ${colors.neutral.lighter};
  border-radius: ${radius.lg};
  padding: ${space.base};
  margin: ${space.base};
  width: 100%;

  &:focus-visible {
    outline: none;
    border: ${borderWidth.base} solid ${colors.neutral.light};
=======
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
>>>>>>> 8eeaff25b5980ef030227ffa9bec3b56bab19822
  }
`;
