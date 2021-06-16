import React, { useState, useEffect } from "react";
import { Button } from "../atoms/Button";
import { VerticalSpacing48, FormWrapper } from "../atoms/Container";
import { Text } from "../atoms/Text";
import { colors, fontType } from "../../styles/const";
import { useHistory } from "react-router-dom";

export const Modal = ({ title }) => {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser = users.find((user) => user.isLogged);
    setUser(currentUser);
  }, []);

  function logOut() {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser = users.find((user) => user.isLogged);
    currentUser.isLogged = false;
    localStorage.setItem("users", JSON.stringify(users));
    history.push("/");
  }

  return (
    <FormWrapper>
      <VerticalSpacing48>
        <Text
          tag="h2"
          type={fontType.title}
          color={colors.font.dark}
          centered={true}
        >
          {title}
        </Text>
      </VerticalSpacing48>
      <VerticalSpacing48>
        <Text
          tag="p"
          type={fontType.user}
          color={colors.secondary.base}
          centered={true}
        >
          {user.email}
        </Text>
      </VerticalSpacing48>
      <Button
        text="Se déconnecter"
        isDisabled={false}
        handleClick={logOut}
        colorName="error"
      />
    </FormWrapper>
  );
};
