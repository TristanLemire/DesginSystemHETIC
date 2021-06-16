import React from "react";
import styled from "styled-components";
import logo from "../../assets/icons/bananamania-logo.svg";
import { space, fontType, colors } from "../../styles/const";
import { Text } from "../atoms/Text";

export const Logo = () => {
  return (
    <LogoWrapper>
      <IconWrapper src={logo} alt="Banana Mania logo" />
      <Text tag="h1" type={fontType.title} color={colors.font.dark}>
        Bananamania
      </Text>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.img`
  width: ${space.xxxl};
  height: ${space.xxxl};
  margin-right: ${space.base};
`;
