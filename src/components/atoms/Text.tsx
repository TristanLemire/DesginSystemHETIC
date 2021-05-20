import React from "react";
import styled from "styled-components";
import { fontStyleType } from "../../styles/const";

type TextProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  type: fontStyleType;
  color: string;
  children: string;
};

export const Text = (props: TextProps) => {
  const CustomTag = `${props.tag}` as keyof JSX.IntrinsicElements;

  const CustomTagStyled = styled(CustomTag)`
    color: ${props.color};
    font-size: ${props.type.fontSize};
    font-weight: ${props.type.fontWeight};
    letter-spacing: ${props.type.letterSpacing};
    line-height: ${props.type.lineHeight};
    font-style: ${props.type.fontStyle};
  `;

  return <CustomTagStyled>{props.children}</CustomTagStyled>;
};