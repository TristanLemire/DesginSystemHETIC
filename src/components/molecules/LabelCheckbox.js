import React from "react";
import styled from "styled-components";
import { Checkbox } from "../atoms/Checkbox"
import { CheckboxLabel } from "../atoms/CheckboxLabel";
import { Error } from "../atoms/Error";
import { responsiveFor } from '../../styles/mixins';
import { space } from "../../styles/const";

export const LabelCheckbox = (props) => {
  const { label, name, error } = props;
  return (
    <CheckboxWrapper>
      <CheckboxContainer>
        <Checkbox name={name} />
        <CheckboxLabel label={label} name={name}/>
      </CheckboxContainer>
      {error && <Error error={error} />}
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`

  ${responsiveFor.mobile`
    margin-bottom: ${space.base};
  `}
`;

const CheckboxContainer = styled.div`
  display: flex;
`;