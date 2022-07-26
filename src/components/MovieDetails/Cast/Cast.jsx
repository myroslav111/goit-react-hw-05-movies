import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import apiGet from 'service/api';
import { CardCharacter, Img, CharacterName, Wrap } from './Cast.styled';
import def from 'components/defaultImg';
import { animateScroll } from 'react-scroll';
import { toast } from 'react-toastify';

const Cast = () => {
  const { movieId } = useOutletContext();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const dataCast = await apiGet.getCharacter(movieId);
        setCast(dataCast);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

  if (cast) {
    animateScroll.scrollMore(400);
  }
  return (
    <>
      {cast &&
        (cast.length > 0 ? (
          <Wrap>
            {cast.map(({ profile_path, original_name, character, id }) => {
              // console.log(profile_path);
              const img = profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : def;
              return (
                <CardCharacter key={id}>
                  <Img src={img} alt="poster of character" />
                  <CharacterName>
                    <div>
                      <h3>{original_name}</h3>
                      <h3>{character || 'хз))'}</h3>
                    </div>
                  </CharacterName>
                </CardCharacter>
              );
            })}
          </Wrap>
        ) : (
          <p>No cast</p>
        ))}
    </>
  );
};

export default Cast;
