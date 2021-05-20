import React from "react";
import { colors, fontType } from "../../styles/const";
import {VerticalSpacing48, VerticalSpacing40, FormWrapper} from "../atoms/Container"
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { useHistory } from 'react-router-dom';

export const PasswordRecovery = () => {
  const history = useHistory();

  return (
    <FormWrapper>
      <VerticalSpacing48>
        <Text tag="h2" type={fontType.title} color={colors.font.dark}>
          Récupération du mot de passe
        </Text>
      </VerticalSpacing48>
      <VerticalSpacing40>
        <Text tag="h2" type={fontType.regular} color={colors.font.grey}>
          Nous avons envoyé un message à l’adresse correctemail@gmail.com afin que vous choisissiez un nouveau mot de passe.
        </Text>
      </VerticalSpacing40>
      <VerticalSpacing40>
        <Text tag="h2" type={fontType.regular} color={colors.font.grey}>
          Vous n’avez pas reçu l’email ? N’hésitez pas à <span>contacter le support</span>
        </Text>
      </VerticalSpacing40>
      <Button handleClick={() => history.push('/')} text="Retourner à la page de connexion" />
    </FormWrapper>
  );
};
