import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;

  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(100vw - 65px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 40px;
  }
`;

export const Item = styled.li`
  box-shadow: 5px 5px 9px -1px rgba(210, 105, 30, 1);
  -webkit-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);
  -moz-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);
  border-radius: 15px;
  border: 4px solid orange;
  overflow: hidden;
  background: black;
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
@media screen and (min-width: 768px) {
   font-size: 24px;
  }
  }
`;
export const TextScore = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
  }
`;

export const TextInfo = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: white;
  text-align: center;
`;
