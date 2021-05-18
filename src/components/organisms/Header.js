import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Logo } from "../molecules/Logo";

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Button text={"Sign in"}></Button>
      <Button text={"Sign up"}></Button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background: grey;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
