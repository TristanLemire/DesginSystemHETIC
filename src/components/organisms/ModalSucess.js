import React from "react";
import styled from "styled-components";

export const ModalSucess = () => {
  return (
    <ModaleWrapper>
      <ModaleContent>
        <ModaleTitle>Welcome !</ModaleTitle>
        <ModaleText>Nice to meet you</ModaleText>
        <ModaleUserName>Banana233</ModaleUserName>
      </ModaleContent>
    </ModaleWrapper>
  );
};

const ModaleWrapper = styled.div`
  display: inline-flex;
  background-color: #c4c4c4;
`;
const ModaleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModaleTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`;

const ModaleText = styled.p`
  text-align: center;
  margin: 0;
`;
const ModaleUserName = styled.p`
  text-align: center;
  color: #6afc9d;
  font-weight: 700;
`;
