import React, {FC} from "react";
import {useFetch} from "../hooks/useFetch";
import {MovieOT, Result, swapi} from "../services/swapi";
import {GlassPage} from "../layouts/GlassPage";
import {Loader} from "../components/Loader";
import {MovieItem} from "../components/movies/MovieItem";
import {usePagination} from "../hooks/usePagination";
import {DefaultButton} from "../components/DefaultButton";
import styled from "styled-components";

interface PropTypes {
    onSelectMovie: (selected: MovieOT) => void
}

export const MovieList: FC<PropTypes> = (
    {
        onSelectMovie
    }
) => {
    const movies = useFetch<Result<MovieOT>>(swapi.url(swapi.endpoints.getMovies))

    const {
        index,
        canGo,
        go,
    } = usePagination(movies.result?.count || 0, 5)

    if (movies.error) {
        alert("Error while loading movies!")
        return <></>
    }
    const Footer = <FooterContainer>
        <DefaultButton onClick={() => go.back()} disabled={!canGo.back}>
            Previous Page
        </DefaultButton>
        <DefaultButton onClick={() => go.forward()} disabled={!canGo.forward}>
            Next Page
        </DefaultButton>
    </FooterContainer>

    return <>
        <GlassPage footer={Footer} header={"Starwars Movies:"} title={"Movie List"}>
            {movies.result?.results && movies.result.results.sort((a, b) => a.episode_id - b.episode_id).map(
                (item) => <MovieItem key={item.episode_id} data={item} onSelect={(id) => {
                    const selectedMovie = movies.result?.results.find(item => item.episode_id === id)
                    selectedMovie && onSelectMovie(selectedMovie)
                }}/>
            ).slice(index.start, index.end)}
        </GlassPage>
        <Loader display={movies.loading}/>
    </>
}

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;

  & > button {
    margin: 10px;
  }
`