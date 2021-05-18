import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


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

const TextBold = styled.text`
    font-weight: 700;
`;
