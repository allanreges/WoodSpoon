import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 290px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background: #3BB300;
  display: flex;
  align-items: center;
  margin: 24px 0 80px 0;
  font-size: 18px;
  color: white;
  font-weight: 400;
  justify-content: center;
  text-align: center;

  @media(min-width: 720px) {
    width: 365px;
    font-size: 15px;
    margin: 0;
  }

`;
