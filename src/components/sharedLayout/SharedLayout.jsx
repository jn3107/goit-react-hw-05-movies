import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  HeaderTag,
  HeaderNavList,
  StyledLink,
  StyledHomeLink,
  Container,
} from './SharedLayout.styled';
import { HeroText, Hero } from './SharedLayout.styled';
import { Loader } from 'components/loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <HeaderTag>
        <HeaderNavList>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </HeaderNavList>
        <StyledHomeLink to="/">UAKino🎬</StyledHomeLink>
      </HeaderTag>
      <main>
        <Hero>
          <HeroText>
            <h1>Hits week🏆</h1>
          </HeroText>
        </Hero>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export { SharedLayout };
