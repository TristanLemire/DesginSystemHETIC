import React from "react";
import styled from "styled-components";
import { fontStyleType, space } from "../../styles/const";

type TextProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  type: fontStyleType;
  color: string;
  children: string;
  underline?: boolean;
};

export const Text = (props: TextProps) => {
  const CustomTag = `${props.tag}` as keyof JSX.IntrinsicElements;
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
`;
