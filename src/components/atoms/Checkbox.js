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
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 0;

  &:after {
    content: url(${checkbox});
    display: inline-block;
    position: relative;
    left: -7px;
    height: 0;
    top: -7px;
    width: 14px;
  }

  &:checked:after {
    content: url(${checkboxChecked});
  }
`;