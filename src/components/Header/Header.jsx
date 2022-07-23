// import { render } from '@testing-library/react';
import React from 'react';
import { HeaderNav, Link, HeaderWrap } from './Header.styled';
import routePath from 'components/routePath';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderNav>
        <Link to={routePath.home}>Home</Link>
        <Link to={routePath.movies}>Movies</Link>
      </HeaderNav>
    </HeaderWrap>
  );
};

export default Header;
