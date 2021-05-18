import React from "react";
import styled from "styled-components";

export const Label = ({ label }) => {
  return <LabelWrapper>{label}</LabelWrapper>;
};

const LabelWrapper = styled.label`
  font-weight: bold;
`;
