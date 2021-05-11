import styled from "styled-components";

//form
export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  width: 327px;
  height: 465px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);
  border-radius: 13px;
  border: 1px solid black;
`;

//input
export const InputField = styled.input`
  margin: 0 0 24px 0;
  width: 279px;
  height: 45px;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;

  &:nth-child(5) {
    margin: 0 0 40px;
  }

  &::placeholder {
    min-width: 46px;
    height: 28px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    vertical-align: center;
  }
`;
//select

export const Options = styled.option``;
//button
