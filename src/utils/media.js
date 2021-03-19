import { css } from 'styled-components';

// values with u prefix are unexpected and relate to value after prefix
export const sizes = {
  big: 1200,
  medium: 1000,
  small: 768,
  u632: 632,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
