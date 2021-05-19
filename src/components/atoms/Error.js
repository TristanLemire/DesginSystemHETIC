import React from "react";
import styled from "styled-components";

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
  color: blue;
`;

const RequirementList = styled.ul`
  color: blue;
`;

const RequirementItem = styled.li`
  color: blue;
`;
