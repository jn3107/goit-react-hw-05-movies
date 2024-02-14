import { Loader } from 'components/loader/Loader';
import { fetchReviews } from 'helppers/Fetch';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMovieReviews = () => {
      setLoading(true);
      fetchReviews(movieId)
        .then(review => {
          setReviews(review);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div style={{ padding: '15px', textAlign: 'justify' }}>
      {loading && <Loader />}
      {!loading && reviews.length === 0 && (
        <p style={{ color: 'white', fontSize: '20px', fontWeight: '600' }}>
          No reviews for this movie...
        </p>
      )}
      <ul style={{ listStyleType: 'none' }}>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4 style={{ marginBottom: '10px', marginTop: '20px' }}>
              {author}
            </h4>
            <p style={{ color: 'white', fontSize: '20px', fontWeight: '600' }}>
              {content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
