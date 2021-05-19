import React from "react";
import { space } from "../../styles/const.ts";
import checkbox from "../../assets/icons/checkbox.svg";
import checkboxChecked from "../../assets/icons/checkboxChecked.svg";
import styled from "styled-components";

export const Checkbox = ({ name }) => {
  return (
    <InputWrapper
      type="checkbox"
      name={name}
      id={name}
    />
  );
};

const InputWrapper = styled.input`
  display: block;
  margin-right: ${space.xs};
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 24px;
    width: 24px;
    background: url(${checkbox});
  }

  &:checked:after {
    background: url(${checkboxChecked});
  }
`;