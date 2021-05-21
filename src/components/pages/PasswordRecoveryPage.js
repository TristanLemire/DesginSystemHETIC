import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Header } from "../organisms/Header";
import logo from "../../assets/icons/banana-pattern.svg";
import { PasswordRecovery } from "../organisms/PasswordRecovery";
import { ContactModal } from "../organisms/ContactModal";
import {space} from "../../styles/const"

export const PasswordRecoveryPage = () => {
  const [contactModal, setContactModal] = useState(false)

  const goToContactModal = () => {
    setContactModal(!contactModal)
  }

  return (
    <Page>
      <Header />
      <FormContainer>
        { contactModal  ?<ContactModal />: <PasswordRecovery goToContactModal={goToContactModal}/> }
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