import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { LabelCheckbox } from "../molecules/LabelCheckbox";
import { Button } from "../atoms/Button";
import { Error } from "../atoms/Error";
import { isEmailValid } from "../../utils/regex";
import { Text } from "../atoms/Text";
import { colors, fontType, space } from "../../styles/const";
import {
  VerticalSpacingLg,
  VerticalSpacingXxl,
  VerticalSpacingXxxl,
  FormWrapper,
} from "../atoms/Container";
import { CustomLink } from "../atoms/CustomLink";
import { responsiveFor } from "../../styles/mixins";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [isUserInvalid, setIsUserInvalid] = useState(false);
  const [matchingUserPassword, setMatchingUserPassword] = useState(false);

  const [userError, setUserError] = useState({});

  useEffect(() => {
    email && password ? setIsSubmitDisabled(false) : setIsSubmitDisabled(true);
  }, [email, password]);

  useEffect(() => {
    if (isWrongEmail)
      setUserError({ text: "Veuillez entrer une adresse mail valide." });
    if (matchingUserPassword) setUserError({ 
        text: "Le mot de passe ne correspond pas à l'adresse mail" 
    });
    else if (isUserInvalid) setUserError({ text: "Identifiants incorrects" });
  
    else setUserError({});
  }, [isUserInvalid, isWrongEmail, matchingUserPassword]);

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
      setMatchingUserPassword(true);
      return;
    } else{
      setMatchingUserPassword(false);
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
    <FormWrapper>
      <VerticalSpacingXxl>
        <Text tag="h2" type={fontType.title} color={colors.font.dark}>
          Se connecter
        </Text>
      </VerticalSpacingXxl>
      <form>
        <VerticalSpacingLg>
          <Input
            type="text"
            placeholder="Email, téléphone ou nom d'utilisateur"
            callback={updateEmail}
            error={userError}
          />
        </VerticalSpacingLg>
      
        <VerticalSpacingXxxl>
          <VerticalSpacingLg> 
            <Error error={matchingUserPassword ? { text: userError.text } : {}} />
          </VerticalSpacingLg>
          <Input
            type="password"
            placeholder="Mot de passe"
            callback={updatePassword}
            error={matchingUserPassword}
          />
        </VerticalSpacingXxxl>
        <LoginOption>
          <LabelCheckbox label="Rester connecté" name="stayConnected" />
          <CustomLink text="Mot de passe oublié ?" goTo="/password-recovery" />
        </LoginOption>
      </form>
      <VerticalSpacingXxxl>
        <Button
          text="Se connecter"
          isDisabled={isSubmitDisabled}
          handleClick={handleFormSubmit}
        />
      </VerticalSpacingXxxl>
      <RegisterOption>
        <Text tap="span" type={fontType.regular} color={colors.font.grey}>
          Pas encore inscrit ? 
        </Text>
        <CustomLink text="S'inscrire ici" goTo="/register" />
      </RegisterOption>
    </FormWrapper>
  );
};

const LoginOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${space.md};

  ${responsiveFor.mobile`
    display: block;
  `}
`;

const RegisterOption = styled.div`
  display: flex;
  justify-content: flex-end;
`;
