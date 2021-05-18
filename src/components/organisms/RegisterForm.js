import React from "react";
import styled from "styled-components";
import { LabelInput } from "../molecules/LabelInput";
import { Button } from "../atoms/Button";

export const RegisterForm = () => {
  return (
    <LoginFormWrapper>
      <FormTitle>Sign up</FormTitle>
      <div>
        Already got an account ? <a>Sign in </a>
      </div>
      <form>
        <LabelInput
          type="email"
          placeholder="email@example.com"
          label="Email"
        />
        <LabelInput type="password" placeholder="Password" label="Password" />
        <LabelInput
          type="password"
          placeholder="Password"
          label="Password confirmation"
        />
      </form>
      <Button isAction={true} text="Sign up"></Button>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
  padding: 50px;
  background-color: red;
  display: inline-block;
`;

const FormTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`;
