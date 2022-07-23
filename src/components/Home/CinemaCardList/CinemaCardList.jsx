import React from 'react';
import { useLocation, generatePath } from 'react-router-dom';
import {
  ContainerPopularCinema,
  CardCinema,
  Img,
  CardCinemaBasement,
} from './CinemaCardList.styled';
import routePath from '../../routePath';

const CinemaCardList = ({ films }) => {
  const location = useLocation();
  return (
    <ContainerPopularCinema>
      {films.map(({ title, poster_path, name, id }) => {
        const movieLink = generatePath(routePath.movie, {
          movieId: id,
        });
        return (
          <CardCinema key={id} to={movieLink} state={{ from: location }}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="poster of cinema"
              id={id}
            />
            <CardCinemaBasement>
              <div>
                <h3>{title || name}</h3>
              </div>
            </CardCinemaBasement>
          </CardCinema>
        );
      })}
    </ContainerPopularCinema>
  );
};
export default CinemaCardList;
