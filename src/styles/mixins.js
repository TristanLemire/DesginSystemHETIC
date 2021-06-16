import { css } from 'styled-components';

export const breakpoints = {
  mobile: '768px',
};

export const responsiveFor = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);