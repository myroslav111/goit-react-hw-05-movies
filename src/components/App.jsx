// import '../service/api'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import routePath from './routePath';
import Movie from './Movie';

export const App = () => {
  return (
    <>
      <Header />
      <Movie />
      {/* <Routes> */}
      {/* <Route path={routePath.home} element={<Home />}></Route> */}
      {/* <Route path={routePath.home} element={<Header />}></Route> */}
      {/* </Routes> */}
    </>
  );
};
