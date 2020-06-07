import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 25px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 720px) {
    flex-direction: row;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  line-height: 1.2;
  text-align: center;
  margin: 56px 0 20px 0;

  span {
    font-weight: 700;
  }

  @media(min-width: 720px) {
    font-size: 25px;
    margin: 15px 0 40px 0;
  }
`;

export const Background = styled.div`
  max-height: 267px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0 0;

  img {
    max-width: 324px;
  }

  @media(min-width: 720px) {
      max-height: 450px;
      border-radius: 10px 0 0 10px;

      img {
        max-width: 462px;
      }
    }

`;

export const MealOptions = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
background: white;
border-radius: 10px;

  h2 {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
    text-align: center;
    margin: 32px 0 58px 0;
    width: 100%;
  }

  @media(min-width: 720px) {
    flex-direction: row;
    max-width: 740px;
    justify-content: space-evenly;

    h2 {
      margin: 20px 0 10px 0;
    }
  }

`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  background: #F5F8FA 0% 0% no-repeat padding-box;
border-radius: 10px;

  @media(min-width: 720px) {
    flex-direction: row;
    max-width: 300px;
  }

`

export const MealSelects = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
background: #F5F8FA 0% 0% no-repeat padding-box;
border-radius: 10px;
margin: 0 17px;
padding: 25px 0 0 0;

  @media(min-width: 720px) {
    flex-direction: row;
    width: 640px;
    justify-content: space-evenly;
    margin: 0;
  }
`

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    margin: 0 0 0 18px;
    font-size: 16px;
    color: #49AD33;
  }

  img {
    max-width: 27px;
  }

  @media(min-width: 720px) {
    img {
      max-width: 30px;
    }
  }

`

export const ButtonsBox = styled.div`
display: flex;
flex-wrap: wrap;

`

export const PriceBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;


h3 {
    font-size: 16px;
    color: #61696F;
    text-align: center;
    margin: 30px 0 0 0;
  }

  @media(min-width: 720px) {
    flex-direction: row;
    align-items: flex-end;
    max-width: 640px;
    justify-content: space-between;

    div {
      padding: 0 0 40px 0;
    }

   h3 {
     font-size: 14px;
     margin: 10px 0 0 0px;
   }
  }

`;

export const PriceTag = styled.p`
  font-size: 18px;
  color: #FF5C26;
  text-align: center;
  margin: 12px 0 0 0;

  span {
    font-size: 34px;
    margin-left: 5px;
  }

`
