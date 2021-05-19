import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LabelInput } from "../molecules/LabelInput";
import { Button } from "../atoms/Button";
import { isEmailValid } from "../../utils/regex";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [isUserInvalid, setIsUserInvalid] = useState(false);

  const [userError, setUserError] = useState({});

  useEffect(() => {
    email && password ? setIsSubmitDisabled(false) : setIsSubmitDisabled(true);
  }, [email, password]);

  useEffect(() => {
    if (isWrongEmail)
      setUserError({ text: "Veuillez entrer une adresse mail valide." });
    else if (isUserInvalid) setUserError({ text: "Identifiants incorrects" });
    else setUserError({});
  }, [isUserInvalid, isWrongEmail]);

  const handleFormSubmit = (event) => {
    const emailValidity = isEmailValid(email);
    setIsWrongEmail(!emailValidity);

    if (!emailValidity) return;

    const existingUsers = JSON.parse(localStorage.getItem("users"));
    const matchingUser =
      existingUsers &&
      existingUsers.find(
        (user) => user.email === email && user.password === password
      );

    if (!matchingUser) {
      setIsUserInvalid(true);
      return;
    }
    login(matchingUser, existingUsers);
  };

  const login = (matchingUser, existingUsers) => {
    matchingUser.isLogged = true;
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // TODO: use parent callback to retreive user email (or take it from localstorage) + display modal
    console.log("connected to user:", email);
  };

  const updateEmail = (value) => {
    setEmail(value);
  };

  const updatePassword = (value) => {
    setPassword(value);
  };

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
          callback={updateEmail}
          error={userError}
        />
        <LabelInput
          type="password"
          placeholder="Password"
          label="Password"
          callback={updatePassword}
          error={{}}
        />
      </form>
      <div>Forgot password ?</div>
      <Button
        isAction={true}
        text="Sign in"
        isDisabled={isSubmitDisabled}
        handleClick={handleFormSubmit}
      ></Button>
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
