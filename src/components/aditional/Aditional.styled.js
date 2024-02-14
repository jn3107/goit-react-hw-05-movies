import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const AdditionalWrp = styled.div`
  background: black;
  padding: 10px 15px;
  h3 {
    margin-bottom: 25px;
    font-weight: 900;
    font-size: 35px;
    color: indianRed;
  }
`;

export const LineDiv = styled.div``;

export const LinkInfo = styled(Link)`
  display: block;
  background-color: oliveDrab;
  width: 280px;
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
