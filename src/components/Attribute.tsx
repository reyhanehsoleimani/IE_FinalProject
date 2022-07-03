import React, {FC} from "react";
import styled from "styled-components";

interface PropTypes {
    title: string,
    value: string | string[]
}

export const Attribute: FC<PropTypes> = (
    {
        title,
        value
    }) => <Container>
    <Key>{title}:</Key>
    <Value>{typeof value !== "object" ? value :
        <List>
            {value.map((item,index) => <li key={index}>{item}</li>)}
        </List>
    }</Value>
</Container>

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 10px;
  @media screen and (max-width: 620px) {
    flex-wrap: wrap;
    margin: 10px 0;
  }
`


const Key = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: capitalize;
  margin-right: 10px;
`

const Value = styled.span`
  color: indianred;
  font-size: 16px;
  font-style: italic;
  text-transform: none;
`

const List = styled.ul`

  list-style-type: circle;
  list-style-position: inside;
`
