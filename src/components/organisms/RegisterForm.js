import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LabelInput } from "../molecules/LabelInput";
import { Button } from "../atoms/Button";
import { isEmailValid, isPasswordValid } from "../../utils/regex";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [userError, setUserError] = useState({});

  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [isWrongConfirmPassword, setIsWrongConfirmPassword] = useState(false);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    email && password && confirmPassword
      ? setIsSubmitDisabled(false)
      : setIsSubmitDisabled(true);
  }, [email, password, confirmPassword]);

  useEffect(() => {
    if (isWrongEmail)
      setUserError({ text: "Veuillez entrer une adresse mail valide." });
    else if (userAlreadyExists)
      setUserError({ text: "Cet utilisateur existe déjà." });
    else setUserError({});
  }, [userAlreadyExists, isWrongEmail]);

  const handleFormSubmit = (event) => {
    const emailValidity = isEmailValid(email);
    const passwordValidity = isPasswordValid(password);
    const passwordConfirmationValidity = password === confirmPassword;

    setIsWrongEmail(!emailValidity);
    setIsWrongPassword(!passwordValidity);
    setIsWrongConfirmPassword(!passwordConfirmationValidity);

    const existingUsers = JSON.parse(localStorage.getItem("users"));
    const userAlreadyExists =
      existingUsers && existingUsers.find((user) => user.email === email);
    setUserAlreadyExists(userAlreadyExists);

    if (
      !emailValidity ||
      !passwordValidity ||
      !passwordConfirmationValidity ||
      userAlreadyExists
    )
      return;

    register(existingUsers);
  };

  const register = (existingUsers) => {
    const newUser = { email: email, password: password };
    const newUserList = existingUsers ? existingUsers : [];
    newUserList.push(newUser);

    localStorage.setItem("users", JSON.stringify(newUserList));
    // TODO: open modal success
    console.log("sucess new user created", newUser);
  };

  const updateEmail = (value) => {
    setEmail(value);
  };

  const updatePassword = (value) => {
    setPassword(value);
  };

  const updateConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  // const resetErrors = () => {
  //   setIsWrongEmail(false);
  //   setIsWrongPassword(false);
  //   setIsWrongConfirmPassword(false);
  // };

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
          callback={updateEmail}
          error={userError}
        />
        <LabelInput
          type="password"
          placeholder="Password"
          label="Password"
          callback={updatePassword}
          error={
            isWrongPassword
              ? {
                  text:
                    "Le mot de passe doit contenir au moins 8 charactères  dont :",
                  requirements: [
                    "1 majuscule",
                    "1 minuscule",
                    "1 nombre",
                    "1 charactère spécial",
                  ],
                }
              : {}
          }
        />
        <LabelInput
          type="password"
          placeholder="Password"
          label="Password confirmation"
          callback={updateConfirmPassword}
          error={
            isWrongConfirmPassword
              ? { text: "Les mots de passe ne correspondent pas." }
              : {}
          }
        />
      </form>
      <Button
        isAction={true}
        isDisabled={isSubmitDisabled}
        text="Sign up"
        handleClick={handleFormSubmit}
      />
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
