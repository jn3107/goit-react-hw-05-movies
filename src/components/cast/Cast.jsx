import { fetchActors } from 'helppers/Fetch';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, Name, Character, Item, ActorImage } from './Cast.styled';
import { Loader } from 'components/loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCast = () => {
      fetchActors(movieId)
        .then(actorsInfo => {
          setLoading(true);
          setActors(actorsInfo);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchCast();
  }, [movieId]);
  const defaultMovieImg =
    'https://netsh.pp.ua/2017/08/no-photo-placeholder-opencart';

  return (
    <div>
      <CastList>
        {loading && <Loader />}
        {actors.map(({ name, character, id, profile_path, original_title }) => (
          <Item key={id}>
            <ActorImage
              width="150px"
              height="225px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultMovieImg
              }
              alt={original_title}
            />
            <Name>{name}</Name>
            <Character>Character:{character}</Character>
          </Item>
        ))}
      </CastList>
    </div>
  );
};
export default Cast;
