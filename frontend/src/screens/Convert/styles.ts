import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 40px;
  gap: 36px;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 70%;

  p {
    font-weight: 300;
    margin-bottom: 4px;
  }
`

export const Input = styled.input`
  margin: 10px 0;
  width: 100%;
  height: 36px;
  padding: 8px;
  border-radius: 12px;
  border: 2px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;

  &:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
