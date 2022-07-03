import {useTitle} from "../hooks/useTitle";
import React, {FC, PropsWithChildren, ReactNode} from "react";
import styled from "styled-components";
import {Config} from "../config";

type TitleSide = "start" | "end" | "center"

export interface PageProps {
    title: string,
    header: {
        content: string,
        side: TitleSide
    } | string,
    footer?: ReactNode
}

export const GlassPage: FC<PropsWithChildren<PageProps>> = (
    {
        header,
        title,
        children,
        footer
    }) => {
    useTitle(`${Config.appName} - ${title}`)

    return <Container>
        <InnerContainer>
            <Title
                side={typeof header !== "string" ? header.side : "start"}>
                {typeof header === "string" ? header : header.content}</Title>
            <Glass minHeight={"200px"}>
                {children}
            </Glass>
            {
                footer && <Footer>
                    {footer}
                </Footer>
            }
        </InnerContainer>
    </Container>
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  width: clamp(300px, calc(100%), 1000px);
`

const Title = styled.div<{ side: TitleSide }>`
  font-weight: bold;
  font-size: 32px;
  width: 100%;
  text-align: ${props => props.side};
  margin: 20px;
`


export const Glass = styled.div<{ minHeight?: string }>`
  /*Styling*/
  border-radius: 5px;
  /*Positioning and  overflow*/
  position: relative;
  color: white;
  min-height: ${props => props.minHeight};
  backdrop-filter: blur(10px);
  overflow: hidden;
  padding: 10px;
`
const Footer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`