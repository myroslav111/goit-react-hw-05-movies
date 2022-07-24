import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import apiGet from 'service/api';
import Movie from 'components/Movie/Movie';
import { Wrap, NavLinkStyled } from './MovieDetails.styled';

const MovieDetails = () => {
  //Хук useParamsвозвращает объект пар ключ/значение динамических параметров из текущего URL-адреса, которые были сопоставлены <Route path>.
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  //Этот хук возвращает текущий locationобъект.
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const movieObj = await apiGet.movieById(movieId);
      setMovie(movieObj);
      // console.log(movieObj);

      try {
      } catch (error) {
        console.log('error');
      }
    })();
  }, [movieId]);

  return (
    <>
      {movie && <Movie dataCinema={movie} />}
      <Wrap>
        <h2>Additional information</h2>
        <NavLinkStyled to="cast" state={{ from: location }}>
          Cast
        </NavLinkStyled>
        <NavLinkStyled to="reviews" state={{ from: location }}>
          Reviews
        </NavLinkStyled>
      </Wrap>

      <Suspense>
        <Outlet context={{ movieId, movie }} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
