import React from "react";
import { colors, font } from "../../styles/const.ts";
import styled from "styled-components";

export const CheckboxLabel = ({ label, name }) => {
  return <LabelWrapper for={name}>{label}</LabelWrapper>;
};

const LabelWrapper = styled.label`
  font-weight: bold;
  color: ${colors.font.dark};
  font-weight: ${font.weight.regular};
  font-size: ${font.size.xs};
  cursor: pointer;
`;
