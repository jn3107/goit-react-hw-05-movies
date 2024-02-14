import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchDiv = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75px;
  padding: 20px;
  z-index: 10;
  margin: 0 auto;
  background-color: black;
`;
export const StyledSearchIcon = styled(IoSearchOutline)`
  color: orange;
  font-size: 35px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  background: white;
  width: 100%;
  margin-bottom: 40px;
  max-width: 600px;
  overflow: hidden;
  border-radius: 15px;
  border: 4px solid orange;
   box-shadow: 5px 5px 9px -1px rgba(210, 105, 30, 1);
  -webkit-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1);
  -moz-box-shadow: 5px, 5px, 9px, -1px rgba(210, 105, 30, 1); rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  button {
    display: inline-block;
    width: 55px;
    height: 55px;
    border: 0;
    background-size: 40%;
    background: oliveDrab;
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    padding: 3px;
  }

  button:hover {
    opacity: 1;
  }

  span {
    font-size: 30px;
  }

  button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 25px;
    border: none;
    outline: none;
    padding-left: 20px;
    padding-right: 4px;
    background: transparent;
    color: black;
  }

  input::placeholder {
    font: inherit;
    font-size: 25px;
    color: black;
  }
`;
