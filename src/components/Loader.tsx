import {useDebouncedState} from "functional-hooks";
import React, {FC, useEffect} from "react";
import styled, {css, keyframes} from "styled-components";

interface PropTypes {
    display?: boolean
    delay?: number
}

export const Loader: FC<PropTypes> = ({display, delay}) => {
    const [displayDebounced, setDisplay] = useDebouncedState<boolean>(true, delay || 500)

    useEffect(() => {
        display !== undefined && setDisplay(display)
    }, [display])

    return (displayDebounced) ? <Container>
        <Inner/>
    </Container> : <></>
}

const Balls = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }

`

const Container = styled.div`
  position: absolute;
  top: calc(50% - 90px);
  width: 100%;
  z-index: 10;
`

const Ball = css`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: ${Balls} 1.8s infinite ease-in-out;
  animation: ${Balls} 1.8s infinite ease-in-out;
`

const Inner = styled.div`
  ${Ball};
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &:after {
    ${Ball};
  }

  &:before {
    ${Ball};
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 3.5em;
  }
`