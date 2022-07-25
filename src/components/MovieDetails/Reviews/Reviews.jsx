import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import apiGet from 'service/api';
import { WrapContent } from './Reviews.styled';
import { animateScroll } from 'react-scroll';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { movieId, movie } = useOutletContext();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const dataReviews = await apiGet.getReviews(movieId);
        setReview(dataReviews);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);
  if (reviews) {
    animateScroll.scrollMore(400);
  }
  return (
    <>
      {reviews &&
        (reviews.length > 0 ? (
          <WrapContent
            p={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          >
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}
          </WrapContent>
        ) : (
          <p>No rewiews</p>
        ))}
    </>
  );
};

export default Reviews;
