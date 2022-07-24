// import '../service/api'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import routePath from './routePath';
import MovieDetails from './MovieDetails';
import Reviews from './MovieDetails/Reviews';
import Cast from './MovieDetails/Cast/Cast';

export const App = () => {
  return (
    <>
      <Header />
      {/* <MovieDetails /> */}
      {/* <Movie /> */}
      <Routes>
        <Route path={routePath.home} element={<Home />}></Route>
        <Route path={routePath.movie} element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />}></Route>
          <Route path="cast" element={<Cast />}></Route>
        </Route>
      </Routes>
    </>
  );
};
