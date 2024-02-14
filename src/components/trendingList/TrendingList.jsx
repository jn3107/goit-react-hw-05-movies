import React from 'react';
import {
  StyledLink,
  List,
  Item,
  Photo,
  Text,
  TextScore,
} from './TrendingList.styled';
import { useLocation } from 'react-router-dom';

const TrendingList = ({ movies }) => {
  const location = useLocation();
  const defaultMovieImg =
    'https://netsh.pp.ua/2017/08/no-photo-placeholder-opencart';

  return (
    <div>
      <List>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <Photo
                width="264px"
                height="384px"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultMovieImg
                }
                alt={title}
              />
              <Text>{title}</Text>
            </StyledLink>
            <TextScore>User Scrore: {Math.round(vote_average * 10)}%</TextScore>
          </Item>
        ))}
      </List>
    </div>
  );
};

export { TrendingList };
