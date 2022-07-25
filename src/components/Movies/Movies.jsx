import { useState } from 'react';
import SearchBar from './SearchBar';
import apiGet from 'service/api';
import CinemaCardList from 'components/Home/CinemaCardList';
import { Wrap } from './Movies.styled';
import { toast } from 'react-toastify';

const Movies = () => {
  const [cinemaObj, setCinemaObj] = useState(null);

  const handleFormSubmit = async name => {
    try {
      const searchCinema = await apiGet.getCinemaByName(name);
      if (searchCinema.length === 0) {
        toast.info(` ${name} not found!`);
        return;
      }
      setCinemaObj(searchCinema);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Wrap>
      <SearchBar onSubmit={handleFormSubmit} />
      {cinemaObj && <CinemaCardList films={cinemaObj} />}
    </Wrap>
  );
};

export default Movies;
