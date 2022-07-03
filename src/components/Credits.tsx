/*
Credits to the developer :)
*/
import React from "react";
import styled from "styled-components";

export const Credits = () => {
    return <Container></Container>
}

const Container = styled.div`
  position: fixed;
  right: 5px;
  bottom: 5px;
  font-size: 12px;
  pointer-events: none;
  z-index: 15;
  padding: 5px;

  /*
  I used backdrop-filter in this blur background, instead of the last method which supported older browsers,
  and that's because the glass effect is not much of an important matter in this item.
  */
  backdrop-filter: blur(10px);

  & a {
    color: gold;
    font-weight: bold;
    pointer-events: all;
  }
`

