import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";
import { Error } from "../atoms/Error";

export const LabelInput = (props) => {
  const { label, type, placeholder, callback, error } = props;
  return (
    <LabelInputWrapper>
      <Label label={label} />
      <Input type={type} placeholder={placeholder} callback={callback} />
      {error && <Error error={error} />}
    </LabelInputWrapper>
  );
};

const LabelInputWrapper = styled.div``;
