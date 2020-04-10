import { css } from 'styled-components';

export const sizes = {
  big: 1200,
  medium: 1000,
  small: 768,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
