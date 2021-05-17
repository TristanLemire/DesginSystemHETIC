import React from "react";
import styled from "styled-components";
import { LabelInput } from "../molecules/LabelInput";
import { Button } from "../atoms/Button";

export const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <FormTitle>Sign in</FormTitle>
      <div>
        Not signed up ? <a>Register</a>
      </div>
      <form>
        <LabelInput
          type="email"
          placeholder="email@example.com"
          label="Email"
        />
        <LabelInput type="password" placeholder="Password" label="Password" />
      </form>
      <div>Forgot password ?</div>
      <Button isAction={true} text="Sign in"></Button>
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
