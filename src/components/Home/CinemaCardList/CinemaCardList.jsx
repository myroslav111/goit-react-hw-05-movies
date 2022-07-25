import React from 'react';
import { useLocation, generatePath } from 'react-router-dom';
import {
  ContainerPopularCinema,
  CardCinema,
  Img,
  CardCinemaBasement,
} from './CinemaCardList.styled';
import routePath from '../../routePath';
import def from 'components/defaultImg';
import { Title } from '../Home.styled';

const CinemaCardList = ({ films }) => {
  const location = useLocation();
  return (
    <ContainerPopularCinema>
      <Title>TRENDING TODAY</Title>
      {films.map(({ title, poster_path, name, id }) => {
        const movieLink = generatePath(routePath.movie, {
          movieId: id,
        });
        const imgSrc = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : def;
        return (
          <CardCinema key={id} to={movieLink} state={{ from: location }}>
            <Img src={imgSrc} alt="poster of cinema" id={id} />
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
