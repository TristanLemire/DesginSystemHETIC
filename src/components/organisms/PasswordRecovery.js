import React from "react";
import { colors, fontType } from "../../styles/const";
import {
  VerticalSpacing64,
  VerticalSpacing40,
  FormWrapper,
} from "../atoms/Container";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { useHistory } from "react-router-dom";
import { CustomAction } from "../atoms/CustomLink";

export const PasswordRecovery = ({ goToContactModal }) => {
  const history = useHistory();

  return (
    <FormWrapper>
      <VerticalSpacing64>
        <Text tag="h2" type={fontType.title} color={colors.font.dark}>
          Récupération du mot de passe
        </Text>
      </VerticalSpacing64>
      <VerticalSpacing40>
        <Text tag="h2" type={fontType.regular} color={colors.font.grey}>
          Nous avons envoyé un message à l’adresse correctemail@gmail.com afin
          que vous choisissiez un nouveau mot de passe.
        </Text>
      </VerticalSpacing40>
      <VerticalSpacing40>
        <Text tag="h2" type={fontType.regular} color={colors.font.grey}>
          Vous n’avez pas reçu l’email ? N’hésitez pas à{" "}
          <CustomAction
            text="contacter le support"
            handleClick={goToContactModal}
          />
        </Text>
      </VerticalSpacing40>
      <Button
        handleClick={() => history.push("/")}
        text="Retourner à la page de connexion"
      />
    </FormWrapper>
  );
};
