import {Credits} from "./components/Credits";
import React, {useState} from "react";
import {Starships} from "./pages/Starships";
import {MovieList} from "./pages/MovieList";
import styled from "styled-components";
import {MovieOT} from "./services/swapi";


export const App = () => {
    const [selectedMovie, setSelectedMovie] = useState<MovieOT | undefined>(undefined)

    return <Container>
        {selectedMovie ? <Starships movie={selectedMovie} onSelectMovie={(item)=>setSelectedMovie(item)}/> : <MovieList onSelectMovie={(selected) => setSelectedMovie(selected)}/>}
        <Credits/>
    </Container>
}

const Container = styled.div`
  width: 100%;
`

