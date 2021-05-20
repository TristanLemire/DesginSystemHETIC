import React from "react";
import styled from "styled-components";
import { Header } from "../organisms/Header";
import logo from "../../assets/icons/banana-pattern.svg";
import { PasswordRecovery } from "../organisms/PasswordRecovery";
import {space} from "../../styles/const"

export const PasswordRecoveryPage = () => {
  return (
    <Page>
      <Header />
      <FormContainer>
        <PasswordRecovery />
      </FormContainer>
    </Page>
  );
};

const Page = styled.div`
  background: url(${logo});
  height: 100vh;
  background-position: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${space.xxl};
`;