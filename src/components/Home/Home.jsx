import { useState, useEffect } from 'react';
import apiGet from 'service/api';
import CinemaCardList from './CinemaCardList';

const Home = () => {
  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const cinema = await apiGet.popular();
        setCinema(cinema);
      } catch (error) {
        console.log('error');
      }
    })();
  }, []);

  return <CinemaCardList films={cinema} />;
};
export default Home;
