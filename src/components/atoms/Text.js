import React from "react";
import styled from "styled-components";
import { fontStyleType, space } from "../../styles/const";
import { responsiveFor } from '../../styles/mixins';

export const Text = (props) => {
  const CustomTag = `${props.tag}`;
  return (
    <CustomTag>
      <CustomTagStyled theme={props}>{props.children}</CustomTagStyled>
    </CustomTag>
  );
};

const CustomTagStyled = styled.p`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.type.fontSize};
  font-weight: ${(props) => props.theme.type.fontWeight};
  letter-spacing: ${(props) => props.theme.type.letterSpacing};
  line-height: ${(props) => props.theme.type.lineHeight};
  font-style: ${(props) => props.theme.type.fontStyle};
  border-bottom: ${(props) => props.theme.underline && `solid ${props.color}`};
  padding-bottom: ${(props) => props.theme.underline && space.xxxs};

  ${responsiveFor.mobile`
    font-size: ${(props) => props.theme.type.fontSizeMobile};
  `}
`;
