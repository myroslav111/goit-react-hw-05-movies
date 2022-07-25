import styled from '@emotion/styled';

export const Wrap = styled.div`
  padding-top: 70px;
  padding-left: 10px;
  position: fixed;
  top: -61px;
  z-index: 100;
  @media screen and (max-width: 500px) {
    position: relative;
    padding-top: 150px;
    display: block;
    z-index: 0;
  }
`;

export const Form = styled.form`
  outline: 0;
  float: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;

  & > input {
    outline: 0;
    height: 42px;
    width: 244px;
    line-height: 42px;
    padding: 0 16px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #212121;
    border: 0;
    float: left;
    border-radius: 4px 0 0 4px;
  }
  & > input:focus {
    outline: 0;
    background-color: #fff;
  }
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    outline: 0;
    background: none;
    background-color: rgba(38, 50, 56, 0.8);
    float: left;
    height: 42px;
    width: 42px;
    text-align: center;
    line-height: 42px;
    border: 0;
    color: #fff;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 16px;
    text-rendering: auto;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    transition: background-color 0.4s ease;
    border-radius: 0 4px 4px 0;
  }
  & > button:hover {
    background-color: rgba(0, 150, 136, 0.8);
    & > svg {
      width: 1.4em;
      height: 1.4em;
    }
  }
  svg {
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
`;
