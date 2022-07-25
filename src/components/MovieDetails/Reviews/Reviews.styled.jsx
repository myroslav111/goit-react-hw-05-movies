import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = props =>
  css`
    background: url(${props.p});
  `;

export const WrapContent = styled.ul`
  padding: 30px 30px 30px 30px;
  ${dynamicStyle};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* color: white; */
  color: #ff6b08;
  font-weight: 900;
`;
