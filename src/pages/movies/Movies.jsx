import { TrendingList } from 'components/trendingList/TrendingList';
import { fetchSearchMovies } from 'helppers/Fetch';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomeDiv, TextInfo } from '../home/Home.styled';
import { Loader } from 'components/loader/Loader';
import { SearchForm } from 'components/searchForm/SearchForm';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noName, setNoName] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  useEffect(() => {
    const fetchMoviesSearch = () => {
      setLoading(true);
      fetchSearchMovies(searchQuery)
        .then(queryMovieName => {
          setMovies(queryMovieName);
          setNoName(queryMovieName.length === 0);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    if (searchQuery) {
      fetchMoviesSearch();
    } else {
      setMovies([]);
      setNoName(false);
      setLoading(false);
    }
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ searchQuery: form.elements.searchQuery.value });
    form.reset();
  };

  return (
    <HomeDiv>
      <SearchForm handleSubmit={handleSubmit} />
      {loading && <Loader />}
      {noName && searchQuery && (
        <TextInfo>
          There is no movies with this request. Please, try again
        </TextInfo>
      )}
      <TrendingList movies={movies} />
    </HomeDiv>
  );
}

export default Movies;
