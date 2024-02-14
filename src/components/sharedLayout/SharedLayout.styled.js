import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin: 0;
  background: black;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const HeaderNavList = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 800;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 25px;
    padding: 10px 40px;
  }
`;

export const StyledHomeLink = styled(NavLink)`
  color: yellow;
  font-size: 45px;
  line-height: 1.19;
  padding: 16px 20px;
  text-decoration: none;
  font-weight: 900;
  @media screen and (min-width: 768px) {
    padding: 16px 40px;
  }
`;

export const StyledLink = styled(NavLink)`
  gap: 10px;
  width: 75px;
  text-align: center;
  color: orange;
  background-color: oliveDrab;
  text-decoration: none;
  border-radius: 15px;
  transition: transform 0.2s;
  padding: 5px 35px 5px 35px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    border: 4px solid #006400;
    color: olive;
    background-color: orange;
    scale: 1.15;
    box-shadow: 5px 5px 9px -1px rgba(154, 205, 50, 1);
    -webkit-box-shadow: 5px, 5px, 9px, -1px rgba(154, 205, 50, 1);
    -moz-box-shadow: 5px, 5px, 9px, -1px rgba(154, 205, 50, 1);
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const Hero = styled.div`
  background: black;
  padding: 50px;
`;

export const HeroText = styled.div`
  color: indianRed;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2),
    -2px -2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  margin-bottom: 10px;
  max-width: 600px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    font-weight: 900;
  }
`;
