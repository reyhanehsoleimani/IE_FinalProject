import React, {FC} from "react";
import styled from "styled-components";
import {MovieOT} from "../../services/swapi";
import {DefaultButton} from "../DefaultButton";
import {Attribute} from "../Attribute";

interface PropTypes {
    data: MovieOT,
    onSelect: (episode_id: number) => void
}

export const MovieItem: FC<PropTypes> = (
    {
        data,
        onSelect
    }
) => {

    const attributes = {
        Title: data.title,
        Episode: data.episode_id,
        "Release Date": data.release_date,
    }

    return <Container>
        {
            Object.entries(attributes).map(([key, value], index) => <Attribute key={index} title={key}
                                                                               value={String(value)}/>)
        }
        <DefaultButton onClick={() => onSelect(data.episode_id)}>
            Show Starships
        </DefaultButton>
    </Container>
}


const Container = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  min-height: 50px;
  width: calc(100% - 20px);
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 620px) {
    flex-wrap: wrap;
  }
`

