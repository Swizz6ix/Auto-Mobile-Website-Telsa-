import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Footer({bg, clor}) {
  return (
    <Container bg={bg}>
        <Nav>
        <Fade bottom>
            <Header>Footer Menu</Header>
            <Table>
                <List>
                    <Link href="#" clor={clor}>
                    Playboi Baby © 2022
                    </Link>
                </List>
                <List>
                    <Link clor={clor}>
                    Privacy & Legal
                    </Link>
                </List>
                <List>
                    <Link href='#' clor={clor}>
                    Vehicle Recalls
                    </Link>
                </List>
                <List>
                    <Link href='#' clor={clor}>
                    Contact
                    </Link>
                </List>
                <List>
                    <Link href='#' clor={clor}>
                    Careers
                    </Link>
                </List>
                <List>
                    <Link href='#' clor={clor}>
                    News
                    </Link>
                </List>
                <List>
                    <Link href='#' clor={clor}>
                    Engage
                    </Link>
                </List>
                <List>
                    <Link href='#' clor={clor}>
                    Locations
                    </Link>
                </List>
            </Table>
        </Fade>
        </Nav>
    </Container>
  )
}

export default Footer

const Link = styled.a`
    color: ${props => props.clor || '#d0d1d2'};
    white-space: nowrap;
    margin: calc(24px + 4px -1)
    background-color: transparent;
    cursor: pointer;
    position: relative;
    text-align: initial;
    border-width: 0px;
    border-style: intial;
    border-color: intial;
    border-image: intial;
    padding: opx;
    transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75)
`

const List = styled.li`
position: relative;
padding-inline-start: 0;
padding-inline-end: 0;
display: inline-block;
padding: 4px;
color: #d0d1d2;
font-weight: 500;
@media (min-width: 600px) {
    padding-block-end: 8px;
    padding-block-start: 8px;
    margin-block-end: 0px;
    margin-block-start: calc(8px + 0.5em);
}
@media (max-width: 899px) {
    text-align: center;
}
`

const Table = styled.ul`
    margin-block: 8px;
    padding-inline: 0;
    padding: 0;
    line-height: 20px;
    margin: 0px auto;
    min-height: 70px;
    width: fit-content;
    display: flex;
    align-items: center;
    @media (max-width: 599px) {
        flex-flow: column nowrap;
    }
`

const Header = styled.h2`
    clip: rect(0px, 0px, 0px, 0px);
    block-size: 1px;
    clip-path: inset(100%);
    inline-size: 1px;
    white-space: nowrap;
    margin: -1;
    overflow: hidden;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow-wrap: normal;
    position: absolute;
    @media (min-with: 600px) {
        letter-spacing: -0.5px;
        font-size: 28px;
        line-height: 36px;
    }
`

const Nav = styled.nav`
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
flex-flow: column;
align-content: center;
align-items: center;
display: flex;
justify-content: center;
inline-size: 100%;
`

const Container = styled.footer`
    color: #e2e3e3;
    background: ${props => props.bg || '#000'};;
    display: flex;
    flex-flow: row nowrap;
    // scroll-snap-align: start;
    font-size: 12px;
    padding: 0px 24px;
    @media (min-width: 900px) {
        left: 0px;
        opacity: 1;
        visibility: visible;
        transition: visibility 0.5s ease 0s, opacity 0.5s linear 0.5s;
        bottom: 0px;
        inset-inline-start: 0px;
        // position: sticky;
        width: 100%;
        z-index: 100
    }
`