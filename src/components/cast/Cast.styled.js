import styled from 'styled-components';

export const CastList = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(75vw - 0px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  background: black;
`;
export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
`;
export const Character = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
`;
export const Item = styled.li`
  box-shadow: 5px 5px 9px -1px rgba(210, 105, 30, 1);
  -webkit-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);
  -moz-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);
  border-radius: 15px;
  border: 4px solid orange;
  overflow: hidden;
`;
export const ActorImage = styled.img`
  min-width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
