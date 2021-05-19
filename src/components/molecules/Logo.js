import React from "react";
import styled from "styled-components";
import logo from "../../assets/icons/bananamania-logo.svg";
import { space } from "../../styles/const";

export const Logo = () => {
  return (
    <LogoWrapper>
      <IconWrapper src={logo} alt="Banana Mania logo" />
      <h1>BananaMania</h1>
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
