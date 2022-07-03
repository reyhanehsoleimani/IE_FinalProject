import styled from "styled-components";


export const DefaultButton = styled.button`
  /*
  The default button styling
  */
  box-shadow: inset 0 34px 0 -15px #b54b3a;
  background-color: #a73f2d;
  border: 1px solid #241d13;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 9px 23px;
  text-decoration: none;
  border-radius: 10px;
  text-shadow: 0 -1px 0 #7a2a1d;
  margin: 0 10px;

  /*
  The default button hover styling
  */
  &:hover {
    background-color: #b34332;
  }

  /*
  The default button active styling
  */
  &:active {
    position: relative;
    top: 1px;
  }

  /*
  The default button disabled styling
  */
  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`