import {MovieOT} from "../../services/swapi";
import {useFetch} from "../../hooks/useFetch";
import styled from "styled-components";
import React from "react";

export const MovieLink = (props: { url: string, onSelect: (selected: MovieOT | undefined) => void }) => {
    const movie = useFetch<MovieOT>(props.url)
    if (movie.loading) {
        return <UnLoaded>Loading...</UnLoaded>
    }
    return <MovieLinkContainer onClick={() => {
        props.onSelect(undefined)
        setTimeout(() => props.onSelect(movie.result), 500)
    }}>{movie.result.title}</MovieLinkContainer>
}

const MovieLinkContainer = styled.span`
  cursor: pointer;

  &:hover {
    background: #b34332;
    color: black;
  }
`
const UnLoaded = styled.span`
  opacity: 0.5;
`