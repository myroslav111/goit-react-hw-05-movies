// import { render } from '@testing-library/react';
import React from 'react';
import { HeaderNav, Link, HeaderWrap } from './Header.styled';
import routePath from 'components/routePath';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderNav>
        <Link to={routePath.home}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Home
        </Link>
        <Link to={routePath.movies}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Movies
        </Link>
      </HeaderNav>
    </HeaderWrap>
  );
};

export default Header;
