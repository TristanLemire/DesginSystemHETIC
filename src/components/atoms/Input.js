import React from "react";
import styled from "styled-components";

export const Input = ({ type, placeholder }) => {
  return <InputWrapper type={type} placeholder={placeholder} />;
};

const InputWrapper = styled.input`
  display: block;
`;
