import React from "react";
import styled from "styled-components";
import { Header } from "../organisms/Header";
import logo from "../../assets/icons/banana-pattern.svg";
import { LoginForm } from "../organisms/LoginForm";

export const LoginPage = () => {
  return (
    <Page>
      <Header />
      <LoginForm />
    </Page>
  );
};

const Page = styled.div`
  background: url(${logo});
  height: 100vh;
  background-position: center;
`;
