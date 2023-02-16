import styled from 'styled-components';

export const Title = styled.h2`
  margin: 10px;
  display: flex;
  justify-content: center;
  color: rgb(52, 52, 52);
  font-weight: 800;
  font-family: Ultra, sans-serif;
  font-size: 30px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: white 0px 2px, rgb(119 119 119) 0px 3px;
`;

export const FormContact = styled.form`
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

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;

  color: rgb(52, 52, 52);
  font-weight: normal;
  font-family: Ultra, sans-serif;
  font-size: 20px;
  text-shadow: lightgrey 0px 2px, rgb(119 119 119) 0px 3px;
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  background: rgb(59, 79, 87);
  background: linear-gradient(
    90deg,
    rgba(59, 79, 87, 1) 13%,
    rgba(86, 96, 147, 1) 79%
  );
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  margin: 30px auto 10px;
  max-weight: 50px;
  padding: 12px 10px;
  text-align: center;
  text-transform: uppercase;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
  :focus {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;
export const FormInput = styled.input`
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
