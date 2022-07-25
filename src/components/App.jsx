import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routePath from './routePath';
import Header from './Header';
// import Home from './Home';
// import MovieDetails from './MovieDetails';
// import Reviews from './MovieDetails/Reviews';
// import Cast from './MovieDetails/Cast/Cast';
// import Movies from './Movies';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WrapSpiner } from './App.styled';
import { Circles } from 'react-loader-spinner';
const Home = lazy(() => import('./Home'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Reviews = lazy(() => import('./MovieDetails/Reviews'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Movies = lazy(() => import('./Movies'));

export const App = () => {
  return (
    <div>
      <Header />

      <Suspense
        fallback={
          <WrapSpiner>
            <Circles
              height="80"
              width="80"
              color="#ff6b08"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </WrapSpiner>
        }
      >
        <Routes>
          <Route path={routePath.home} element={<Home />}></Route>
          <Route path={routePath.movies} element={<Movies />}></Route>
          <Route path={routePath.movie} element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="cast" element={<Cast />}></Route>
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
