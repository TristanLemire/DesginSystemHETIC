import React from "react";
import {
  Link
} from "react-router-dom";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Logo } from "../molecules/Logo";

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Link to="/">
        <Button text={"Sign in"} />
      </Link>
      <Link to="/register">
        <Button text={"Sign up"} />
      </Link>
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
