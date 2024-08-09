import { styled } from 'styled-components'

export const Container = styled.button`
  appearance: none;
  background-color: transparent;
  border: 1px solid #1a1a1a;
  border-radius: 10px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  outline: none;
  padding: 5px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`
