import React from "react";
import styled from "styled-components";
import { font } from "../../styles/const";
import { colors } from "../../styles/const";

export const Label = ({ label }) => {
  return <LabelWrapper>{label}</LabelWrapper>;
};

const LabelWrapper = styled.label`
  font-weight: ${font.weight.regular};
  color: ${colors.primary.dark};
`;
