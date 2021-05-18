import React from "react";
import styled from "styled-components";
import logo from "../../assets/icons/banana.svg";

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
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;
