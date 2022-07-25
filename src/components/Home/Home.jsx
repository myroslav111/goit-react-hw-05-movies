import { useState, useEffect } from 'react';
import apiGet from 'service/api';
import CinemaCardList from './CinemaCardList';
import { toast } from 'react-toastify';
// import { Title } from './Home.styled';

const Home = () => {
  const [cinema, setCinema] = useState([]);
  const [booleanToTitle, setBooleanToTitle] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const cinema = await apiGet.popular();
        setCinema(cinema);
        setBooleanToTitle(false);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <CinemaCardList films={cinema} bool={booleanToTitle} />
    </div>
  );
};
export default Home;
