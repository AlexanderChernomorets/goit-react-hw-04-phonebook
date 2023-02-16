import styled from 'styled-components';

export const ContactsSection = styled.div`
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

export const ContList = styled.ul`
  margin-top: 10px;
  text-align: left;
  padding: 0;
`;

export const ContTitle = styled.p`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  font-size: 30px;
  line-height: 42px;
  text-shadow: 0 2px white, 0 3px #777;
  margin: 0;
`;

export const ContItem = styled.li`
  list-style: none;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ContName = styled.span`
  margin: 0px;
  color: rgb(52, 52, 52);
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  font-family: Orienta, sans-serif;
`;

export const ContNum = styled.span`
  margin-right: 10px;
  font-weight: normal;
  text-shadow: 1px 1px rgb(0 0 0 / 60%);
  font-size: 20px;
  font-family: 'Muli', sans-serif;
`;

export const DelButton = styled.button`
  background: rgb(59, 79, 87);
  background: linear-gradient(
    90deg,
    rgba(59, 79, 87, 1) 13%,
    rgba(86, 96, 147, 1) 79%
  );
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 1px 1px 0 0, #000 1px 1px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  font-family: Arial, sans-serif;
  font-size: 10px;
  font-weight: 400;
  // line-height: 20px;
  //   margin: 10px auto;
  max-weight: 50px;
  // padding: 12px 10px;
  text-align: center;
  text-transform: uppercase;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 0px 0px 0 0, #000 0px 0px 0 0px;
    transform: translate(2px, 2px);
  }
  :focus {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;
