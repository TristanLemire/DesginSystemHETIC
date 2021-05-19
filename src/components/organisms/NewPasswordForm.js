import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const NewPasswordForm = () => {
  const [user, setUser] = useState("defaultuser@mail.com");

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users"));
    const currentUser =
      existingUsers && existingUsers.find((user) => user.isLogged);

    if (!currentUser) return;

    const userEmail = currentUser.email;
    setUser(userEmail);
  }, []);

  return (
    <NewPasswordFormWrapper>
      <FormTitle>Forgot password ?</FormTitle>
      <p>{`Nous avons envoyé un message à l’adresse ${user} afin que vous choisissiez un nouveau mot de passe.`}</p>
      <p>Vous n’avez pas reçu l’email ? </p>
      {/* TODO: retour à la page d'accueil = link ? si oui changer design ? */}
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
