import React from "react";
import styled from "styled-components";
import { LabelInput } from "../molecules/LabelInput";
import { Button } from "../atoms/Button";

export const NewPasswordForm = () => {
  return (
    <NewPasswordFormWrapper>
      <FormTitle>Forgot password ?</FormTitle>
      <form>
        <LabelInput
          type="email"
          placeholder="email@example.com"
          label="Email"
        />
        <LabelInput type="password" placeholder="New password" label="New password" />
        <LabelInput
          type="password"
          placeholder="Confirm new password"
          label="Confirm new password"
        />
      </form>
      <Button text="Change my password"></Button>
    </NewPasswordFormWrapper>
  );
};

const NewPasswordFormWrapper = styled.div`
  padding: 50px;
  background-color: red;
  display: inline-block;
`;

const FormTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`;
