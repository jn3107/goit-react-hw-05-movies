import { fetchMovieInform } from 'helppers/Fetch';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieContainer,
  InfoWrp,
  ImgWrp,
  Img,
  ListGenres,
  LinkBtn,
  BackDiv,
} from './MoviesDetails.styled';
import { Loader } from 'components/loader/Loader';
import { AdditionalInfo } from 'components/aditional/Aditional';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();
  const backBtnLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = () => {
      setLoading(true);
      fetchMovieInform(movieId)
        .then(movieDetails => {
          setMovieInfo(movieDetails);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchMovieDetails();
  }, [movieId]);
  if (!movieInfo) {
    return null;
  }
  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};
  const releaseDate = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const defaultMovieImg =
    'https://netsh.pp.ua/2017/08/no-photo-placeholder-opencart';

  return (
    <div>
      <BackDiv>
        <LinkBtn to={backBtnLocation.current}>
          Go back
          {/* <FaArrowRotateLeft /> */}
        </LinkBtn>
      </BackDiv>
      {loading && <Loader />}
      {movieInfo && (
        <MovieContainer>
          <ImgWrp>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultMovieImg
              }
              alt={original_title}
            />
          </ImgWrp>
          <InfoWrp>
            <h2>
              {title}({releaseDate})
            </h2>
            <p>User score:{userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ListGenres>
              {genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ListGenres>
          </InfoWrp>
        </MovieContainer>
      )}
      <AdditionalInfo />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
