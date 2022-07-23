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

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0.2) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%);
`;

export const Link = styled(NavLink)`
  line-height: 50px;
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  cursor: pointer;
  width: 100px;
  border-radius: 8px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-of-type(1):hover {
    background-color: #1abc9c;
    border-radius: 8px;
    font-size: 18px;
  }
  &:nth-of-type(2):hover {
    background-color: #e74c3c;
    border-radius: 8px;
    font-size: 18px;
  }
`;
