import React from "react";
import { colors, fontType } from "../../styles/const";
import {VerticalSpacing64, VerticalSpacing40, FormWrapper} from "../atoms/Container"
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { useHistory } from 'react-router-dom';
import { CustomAction } from '../atoms/CustomLink'

export const ContactModal = () => {
  const history = useHistory();

  return (
    <FormWrapper>
      <VerticalSpacing64>
        <Text tag="h2" type={fontType.title} color={colors.font.dark}>
            Contacter le support
        </Text>
      </VerticalSpacing64>
      <VerticalSpacing40>
        <Text tag="h2" type={fontType.regular} color={colors.font.grey}>
        Un problème ? Nous avons la solution pour vous redonner la banane !Vous pouvez joindre nos équipes du lundi au vendredi, de 9h à 19h.
        </Text>
      </VerticalSpacing40>
      <VerticalSpacing40>
        <Text tag="h2" type={fontType.regular} color={colors.font.grey}>
            Notre adresse email : <CustomAction text="contact@bananamania.fr" href="mailto: contact@bananamania.fr"/>
        </Text>
      </VerticalSpacing40>
      <VerticalSpacing40>
        <Text tag="h2" type={fontType.regular} color={colors.font.grey}>
            Notre numéro de téléphone : <CustomAction text="06 21 21 21 21" href="tel: 0621212121"/>
        </Text>
      </VerticalSpacing40>
      <Button handleClick={() => history.push('/')} text="Retourner à la page de connexion" />
    </FormWrapper>
  );
};