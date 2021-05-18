import React from "react";
import styled from "styled-components";

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
`;
