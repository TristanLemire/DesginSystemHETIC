import React from "react";
import styled from "styled-components";
// import { const } from "./../../../styles/const";


/**
 * Primary UI component for user interaction
 */
export const Text = ({ fontWeight, ...props }) => {
  return (
    <TextBold
      className={["storybook-text"].join(" ")}
      style={fontWeight && { fontWeight }, }
    >
      {text}
    </TextBold>
  );
};

const TextBold = styled.p`
    font-weight: 700;
`;
