import React, {FC, useState} from "react"
import {GlassPage} from "../layouts/GlassPage";
import {MovieOT, StarshipOT} from "../services/swapi";
import styled from "styled-components";
import {useFetch} from "../hooks/useFetch";
import {Loader} from "../components/Loader";
import {DefaultButton} from "../components/DefaultButton";
import {usePagination} from "../hooks/usePagination";
import {Attribute} from "../components/Attribute";
import {MovieLink} from "../components/movies/MovieLink";

interface PropTypes {
    movie: MovieOT,
    onSelectMovie: (item: MovieOT | undefined) => void
}

export const Starships: FC<PropTypes> = (
    {
        movie,
        onSelectMovie
    }
) => {
    const starships = movie.starships.map((url) => (useFetch<StarshipOT>(url)))
    const [selected, setSelected] = useState<typeof starships[0] | undefined>(undefined)
    const {
        index,
        canGo,
        go,
    } = usePagination(starships.length || 0, 5)


    const Footer = <FooterContainer>
        <DefaultButton onClick={() => go.back()} disabled={!canGo.back}>
            Previous Page
        </DefaultButton>
        <DefaultButton onClick={() => onSelectMovie(undefined)}>
            Movie list
        </DefaultButton>
        <DefaultButton onClick={() => go.forward()} disabled={!canGo.forward}>
            Next Page
        </DefaultButton>
    </FooterContainer>

    return <>
        <GlassPage header={`Starships appeared in "${movie.title}":`} title={"Starship list"} footer={Footer}>
            <Container>
                <List>
                    {
                        starships.map(item => {
                            if (!item.result) {
                                return <></>
                            }
                            const active = Boolean(selected && item.result?.url === selected.result?.url)
                            return <ListItem active={active}
                                             onClick={() => active ? setSelected(undefined) : setSelected(item)}
                                             key={item.result.url}>{item.result.name}</ListItem>
                        }).slice(index.start, index.end)
                    }
                </List>
                <Details>
                    {
                        !selected ? <strong>No item selected</strong> :
                            Object.entries(selected.result || {})
                                .filter(([key, _]) => ["name", "model", "crew", "passengers", "films"].includes(key))
                                .map(([key, value]) => key !== "films" ? <Attribute title={key}
                                                                                    value={value}
                                                                                    key={key}/> :
                                    <Attribute key={key} title={"films"}
                                               value={value.map(
                                                   (url: string) => <MovieLink key={url} url={url}
                                                                               onSelect={(item) => onSelectMovie(item)}/>)}/>
                                )
                    }
                </Details>
            </Container>
        </GlassPage>
        <Loader display={starships.map(item => item.loading).includes(true)}/>
    </>
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const List = styled.ul`
  width: 50%;
  min-height: 100px;
  list-style-type: circle;
  list-style-position: inside;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`

const ListItem = styled.li<{ active: boolean }>`
  font-size: 18px;
  font-style: italic;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  padding: 30px 10px 30px;

  &:hover {
    background-color: #cd5c5c;
  }

  color: ${props => props.active ? "#ffdb00" : "white"};
`

const Details = styled.div`
  width: 50%;
  background: rgba(179, 67, 50, 0.1);
  border: 1px solid rgb(255, 255, 255, 0.5);
  border-radius: 0 30px 30px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 620px) {
    width: 100%;
    border-radius: 0 0 30px 30px;
  }

  & strong {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.5);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

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