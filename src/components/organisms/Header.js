import React from "react";
import styled from "styled-components";
import { Logo } from "../molecules/Logo";
import { colors, space } from "../../styles/const.ts";
import { responsiveFor } from '../../styles/mixins';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${colors.primary.base};
  padding: ${space.xxl} 0;
  min-width: 375px;

  ${responsiveFor.mobile`
    min-width: unset;
    padding: ${space.base} 0;
  `}
`;
