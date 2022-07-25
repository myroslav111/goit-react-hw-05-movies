import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-image: linear-gradient(to right top, #8e44ad 0%, #3498db 100%);
`;

export const HeaderNav = styled.div`
  background-color: #34495e;
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 0 0 0 10px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0.2) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%);
`;

// export const Link = styled(NavLink)`
//   line-height: 50px;
//   font-size: 15px;
//   display: inline-block;
//   text-decoration: none;
//   text-transform: uppercase;
//   text-align: center;
//   color: white;
//   cursor: pointer;
//   width: 100px;
//   border-radius: 8px;
//   transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   margin-right: 5px;
//   &:nth-of-type(1):hover {
//     background-color: #1abc9c;
//     border-radius: 8px;
//     font-size: 18px;
//     color: white;
//     font-weight: normal;
//   }
//   &:nth-of-type(2):hover {
//     background-color: #e74c3c;
//     border-radius: 8px;
//     font-size: 18px;
//     color: white;
//     font-weight: normal;
//   }

//   &.active {
//     color: #ff6b08;
//     font-weight: bold;
//     font-size: 20px;
//     box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%);
//   }
// `;

export const Link = styled(NavLink)`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: relative;
  display: inline-block;
  /* padding: 15px 10px; */
  /* margin: 40px 0; */
  /* font-size: 24px; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  /* text-transform: uppercase; */
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
  /* background-color: rgba(227, 9, 9, 0.5); */
  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
  -webkit-box-reflect: below -3px linear-gradient(transparent, #0005);
  width: 100px;
  height: 50px;
  font-size: 15px;
  line-height: 50px;
  margin-right: 10px;
  &:hover {
    background-color: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    font-weight: bold;
    font-size: 20px;
  }
  &.active {
    color: #ff6b08;
    font-weight: bold;
    font-size: 20px;
    /* box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%); */
  }
  &.active span {
    position: absolute;
    display: block;
  }
  &.active span:nth-of-type(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animation1 1s linear infinite;
    animation-delay: 0.25s;
  }
  &.active span:nth-of-type(2) {
    top: -100;
    right: 0%;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animation2 1s linear infinite;
    animation-delay: 0.25s;
  }
  &.active span:nth-of-type(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animation3 1s linear infinite;
    animation-delay: 0.5s;
  }
  &.active span:nth-of-type(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animation4 1s linear infinite;
    animation-delay: 0.75s;
  }
`;
