import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text } from "./Text";
import { fontType, colors } from "../../styles/const";

const NoUnderlinedLink = styled(Link)`
  text-decoration: none;
`;

const LinkButton = styled.a`
  text-decoration: none;
`;

export const CustomLink = ({ text, goTo }) => {
  return (
    <NoUnderlinedLink to={goTo}>
      <Text type={fontType.link} color={colors.primary.dark} underline>
        {text}
      </Text>
    </NoUnderlinedLink>
  );
};

export const CustomAction = ({ text, handleClick, href }) => {
  return (
    <LinkButton href={href} onClick={() => handleClick && handleClick()}>
      <Text type={fontType.link} color={colors.primary.dark} underline>
        {text}
      </Text>
    </LinkButton>
  );
};
