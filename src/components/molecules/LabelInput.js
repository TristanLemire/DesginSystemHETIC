import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

export const LabelInput = (props) => {
  const { label, type, placeholder } = props;
  return (
    <LabelInputWrapper>
      <Label label={label} />
      <Input type={type} placeholder={placeholder} />
    </LabelInputWrapper>
  );
};

const LabelInputWrapper = styled.div``;
