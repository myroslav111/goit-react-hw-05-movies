import { useState, useEffect } from 'react';
import apiGet from 'service/api';
import CinemaCardList from './CinemaCardList';
import { toast } from 'react-toastify';
// import { Title } from './Home.styled';

const Home = () => {
  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const cinema = await apiGet.popular();
        setCinema(cinema);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <CinemaCardList films={cinema} />
    </div>
  );
};
export default Home;
