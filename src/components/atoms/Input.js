import React from "react";
import styled from "styled-components";
import { borderWidth, colors, radius, space } from "../../styles/const";

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
  display: block;
  border: none;
  background-color: ${colors.neutral.lighter};
  border-radius: ${radius.lg};
  padding: ${space.base};
  margin: ${space.base};
  width: 100%;

  &:focus-visible {
    outline: none;
    border: ${borderWidth.base} solid ${colors.neutral.light};
  }
`;
