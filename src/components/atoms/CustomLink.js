import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text } from  "./Text"
import { fontType, colors } from "../../styles/const"

export const NoUnderlinedLink = styled(Link)`
  text-decoration: none;
`

export const CustomLink = ({ text, goTo }) => {
  return (
    <NoUnderlinedLink to={goTo}>
      <Text tap="span" type={fontType.link} color={colors.primary.dark} underline>{text}</Text>
    </NoUnderlinedLink>
  );
};

