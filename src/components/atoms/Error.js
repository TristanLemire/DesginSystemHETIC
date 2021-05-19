import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/const";

export const Error = ({ error }) => {
  if (!error?.text) return null;
  return (
    <>
      <ErrorWrapper>{error.text}</ErrorWrapper>
      {error.requirements && (
        <RequirementList>
          {error.requirements.map((requirement) => {
            return (
              <RequirementItem key={requirement}>{requirement}</RequirementItem>
            );
          })}
        </RequirementList>
      )}
    </>
  );
};

const ErrorWrapper = styled.span`
  color: ${colors.error.base};
`;

const RequirementList = styled.ul`
  color: ${colors.error.base};
`;

const RequirementItem = styled.li`
  color: ${colors.error.base};
`;
