import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = props =>
  css`
    background: url('https://image.tmdb.org/t/p/w500/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg')
      70% 0%;
  `;

export const Head = styled.div`
  ${dynamicStyle};
  position: relative;
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;
  display: flex;
  height: 52vh;
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  &:after {
    content: '';
    position: absolute;
    right: -10px;
    bottom: -1px;
    border-left-color: #fff;
    border-left-style: solid;
    border-left-width: calc(100vw + 10px);
    border-top: 12vw solid transparent;
  }
`;
// ${props.color};
/* cover no-repeat; */
