import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export const NewPasswordForm = () => {
  return (
    <NewPasswordFormWrapper>
      <FormTitle>Forgot password ?</FormTitle>
      <form>
        <Input type="email" placeholder="email@example.com" label="Email" />
        <Input
          type="password"
          placeholder="New password"
          label="New password"
        />
        <Input
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
