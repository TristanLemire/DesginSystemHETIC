import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { isEmailValid, isPasswordValid } from "../../utils/regex";
import { Text } from "../atoms/Text";
import { colors, fontType } from "../../styles/const";
import {VerticalSpacing32, VerticalSpacing64, FormWrapper} from "../atoms/Container"

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
    <FormWrapper>
      <VerticalSpacing32>
        <Text tag="h2" type={fontType.title} color={colors.font.dark}>Créer son compte</Text>
      </VerticalSpacing32>
      <VerticalSpacing32>
        <Text tag="h3" type={fontType.regular} color={colors.font.grey}>Pour accéder à la boutique et découvrir Bananamania !</Text>
      </VerticalSpacing32>
      <VerticalSpacing64>
        <form>
        <VerticalSpacing32>
            <Input
              type="text"
              placeholder="Email, téléphone ou nom d’utilisateur"
              callback={updateEmail}
              error={userError}
            />
          </VerticalSpacing32>
          <VerticalSpacing32>
            <Input
              type="password"
              placeholder="Password"
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
            </VerticalSpacing32>
            <Input
              type="password"
              placeholder="Password confirmation"
              callback={updateConfirmPassword}
              error={
                isWrongConfirmPassword
                  ? { text: "Les mots de passe ne correspondent pas." }
                  : {}
              }
            />
        </form>
      </VerticalSpacing64>
      <VerticalSpacing64>
      <Button
        isDisabled={isSubmitDisabled}
        text="Accéder à mon compte"
        handleClick={handleFormSubmit}
      />
      </VerticalSpacing64>
      <RegisterOption>
        <Text tap="span" type={fontType.regular} color={colors.font.grey}>Déjà inscrit ? </Text>
        <span>Se connecter ici</span>
      </RegisterOption>
    </FormWrapper>
  );
};

const RegisterOption = styled.div`
  display: flex;
  justify-content: flex-end;
`;
