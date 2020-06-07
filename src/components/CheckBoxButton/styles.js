import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin: 30px 5px 35px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  p {
    color: #AEB2B8;
    margin: 0;
    font-size: 28px;
    font-weight: 400;
  }

  ${props =>
    props.activeButton &&
    css`
      background: #3BB300;

      p {
        color: #fff;
      }
  `}

`;
