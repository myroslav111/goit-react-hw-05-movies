import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = props =>
  css`
    background: url(${props.p}) 70% 0%;
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
  button {
    height: 30px;
    width: 40px;
    z-index: 100;
    position: fixed;
    left: 232px;
    top: 5px;

    background: transparent;
    color: black;
    box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%);
    padding: 0px;
    outline: inherit;
    border-radius: 2px;
    text-align: center;
    border: 0px;
    text-decoration: none;
    font-family: 'Amatic SC', cursive;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: pointer;
    width: 100px;
    border-radius: 8px;
    line-height: 50px;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 15px;
    height: 50px;
    &:hover {
      background: #ff6b08;
      font-size: 20px;
    }
  }
`;

export const WrapContent = styled.div`
  display: flex;
  padding: 0 30px 30px 30px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  /* background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'); */
`;

export const Img = styled.img`
  width: 300px;
`;

export const TextContent = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    font-size: 20px;
  }
  p {
    display: flex;
  }
  p span {
    margin-left: 10px;
    color: white;
    width: 50px;
    height: 20px;
    border-radius: 8px;
    background-color: #ff6b08;
    display: flex;
    justify-content: center;
    box-shadow: 0 10px 20px #ff6b08;
  }
`;
