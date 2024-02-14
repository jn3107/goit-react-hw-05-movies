import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: black;
  color: white;
  font-weight: 700;
  font-size: 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ListGenres = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const ImgWrp = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  box-shadow: 5px 5px 9px -1px rgba(210, 105, 30, 1);
  -webkit-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);
  -moz-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);
  border-radius: 15px;
  border: 4px solid orange;
`;

export const InfoWrp = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  flex-direction: column;
  p {
    text-align: justify;
  }
`;

export const Img = styled.img`
  padding: 15px;
  width: 250px;
  @media screen and (min-width: 768px) {
    min-width: 200px;
  }
`;

export const LinkBtn = styled(Link)`
  display: block;
  background-color: oliveDrab;
  width: 120px;
  height: 40px;
  text-align: center;
  border-radius: 15px;
  text-decoration: none;
  color: orange;
  padding: 5px 35px 5px 35px;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
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
export const BackDiv = styled.div`
  background: black;
  padding-top: 15px;
  padding-left: 15px;
`;
