import styled from 'styled-components';

export const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid grey;
  border-radius: 5px;
  margin: 1px 20px;
  width: 350px;
  padding: 10px 40px;
  background-color: whitesmoke;
`;

export const FilterTitle = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  font-size: 18px;
  line-height: 42px;
  text-shadow: 0 2px white, 0 3px #777;
  margin: 0 auto;
`;

export const FilterInput = styled.input`
  border: 1px solid grey;
  border-radius: 4px;
  height: 30px;
  margin: 5px 0;
  padding-left: 10px;

  :hover {
    box-shadow: 2px 2px 2px rgb(0 0 0 / 70%);
  }

  :focus {
    box-shadow: 2px 2px 2px rgb(0 0 0 / 70%);
  }
`;
