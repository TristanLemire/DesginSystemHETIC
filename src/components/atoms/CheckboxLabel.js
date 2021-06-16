import React from "react";
import { colors, fontType } from "../../styles/const.ts";
import styled from "styled-components";

export const CheckboxLabel = ({ label, name }) => {
  return <LabelWrapper htmlFor={name}>{label}</LabelWrapper>;
};

const LabelWrapper = styled.label`
  color: ${colors.font.dark};
  font-size: ${fontType.regular.fontSize};
  font-weight: ${fontType.regular.fontWeight};
  letter-spacing: ${fontType.regular.letterSpacing};
  line-height: ${fontType.regular.lineHeight};
  font-style: ${fontType.regular.fontStyle};
  cursor: pointer;
`;
