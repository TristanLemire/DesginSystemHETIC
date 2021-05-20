import React from "react";
import styled from "styled-components";
import { space, colors, boxShadow } from "../../styles/const";

export const VerticalSpacing32 = styled.div`
  margin-bottom: ${space.lg};
`;


export const VerticalSpacing40 = styled.div`
  margin-bottom: ${space.xl};
`;

export const VerticalSpacing48 = styled.div`
  margin-bottom: ${space.xxl};
`;

export const VerticalSpacing64 = styled.div`
  margin-bottom: ${space.xxxl};
`;

export const FormWrapper = styled.div`
  padding: ${space.xxl};
  background-color: ${colors.background.white};
  max-width: 595px;
  min-width: 375px;
  width: 40%;
  box-shadow: ${boxShadow};
`;
