import { WrapContent, Img, TextContent, Head } from './Movie.styled';
import { useNavigate, useLocation } from 'react-router-dom';

const Movie = ({ dataCinema }) => {
  const {
    backdrop_path,
    title,
    original_title,
    vote_average,
    poster_path,
    release_date,
    overview,
    genres,
  } = dataCinema;
  const location = useLocation();
  const genresCinema = genres.map(gen => gen.name + ' ');
  // Функция navigateимеет две подписи:
  // Хук возвращает функцию, которая позволяет программно перемещаться
  const navigate = useNavigate();

  return (
    <>
      <Head p={`https://image.tmdb.org/t/p/w500${backdrop_path}`}>
        <button
          type="button"
          onClick={() => {
            navigate(location?.state?.from?.pathname ?? '/');
          }}
        >
          {/* location?.state?.from?.pathname ?? */}
          Back
        </button>
      </Head>
      <WrapContent>
        <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <TextContent>
          <h1>
            {title || original_title}
            <span> ({release_date})</span>
          </h1>
          <p>
            User score <span> {vote_average}</span>
          </p>
          <h3>Overview</h3>
          <p>{overview || 'нажаль опис поки в розробці'}</p>
          <h3>Genres</h3>
          <p>{genresCinema}</p>
        </TextContent>
      </WrapContent>
    </>
  );
};
export default Movie;
