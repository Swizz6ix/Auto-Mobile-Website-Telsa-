import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';

function TextFloat({boldHeader, liteHeader, text1, link, strong1, text2, strong2, text3, lrnBtn, text0, ordBtn}) {
  return (
    <Container>
        <Section>
            <TextContainer>
                <LiteHeader className='text__safety'>{liteHeader}</LiteHeader>
                <Header>{boldHeader}</Header>
            </TextContainer>
            <TextArea>
                <TextItem>
                    <Fade bottom>
                        <Text>
                            {text1}
                                <Link> {link}</Link>{text0}
                            <br/>
                            <br/>
                            <strong>
                                {strong1}
                            </strong>
                            <br />
                            {text2}
                            <br />
                            <br />
                            <strong>
                                {strong2}
                            </strong>
                            <br />
                            {text3}
                        </Text>
                    </Fade>
                </TextItem>
            </TextArea>
            {/* <BottomLeft> */}
                    <Buttons>
                    {lrnBtn && 
                        <Button1 startIcon={<AddCircleOutlineIcon />}>
                            {lrnBtn}
                        </Button1>
                    }
                            <Fade bottom>
                        <ButtonContainer>
                            <ButtonLink>
                                <ButtonText>
                                    {ordBtn}
                                </ButtonText>
                            </ButtonLink>
                        </ButtonContainer>
                </Fade>
                    </Buttons>
            {/* </BottomLeft> */}
        </Section>
    </Container>
  )
}

export default TextFloat

const Container = styled.section`
    display: none;
    height: 100vh;
    @media (min-width: 1200px) {
        padding: 32px 40px;
        display: block;
        padding-inline-end: 40px;
        padding-inline-start: 40px;
        grid-area: header-group;
    }
`

const Section = styled.section`
    max-inline-size: 100%;
    align-items: start;
    margin-inline: 0;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    height: 100%;
    flex-flow: column nowrap;
    
`
const TextContainer = styled.span`
    margin: 0;
    display: block;
    margin-inline-end: 0;
    margin-inline-start: 0;
    text-align: start;
    padding-top: 16px;
    color: #171a20;
    letter-spacing: -0.5px;
    padding-block-end: 8px;
    padding-block-start: 32px;
    font-weight: 500;
    transition: font .33s ease, color .33s ease, opacity .33s ease;
    @media (min-width: 600px) {
        width: fit-content;
        font-size:  28px;
        line-height: 36px;
    }
`

const Header = styled.span`
    display: block;
    font-size: 28px;
    line-spacing: 36px
    @media (min-width:600px) {
        opacity: 1;
        transform: translateZ(0);
        transition: all .5s cubic-bezier(.455, .03, .515, .955) .15s;
    }
`

const LiteHeader = styled(Header)`
    font-size: 17px;
    letter-spacing: -.4px;
    font-weight: 300;
    line-height: 1.414;
`
const TextArea = styled.section`
    height: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    grid-area: main;
    @media (min-width: 600px) {
        padding-left: 0;
        padding-inline-start: 0;
    }
`
const TextItem = styled.div`
    padding-bottom: 16px;
    padding-top: 16px;
    text-align: start;
    margin-inline-end: 0;
    margin-inline-start: 0;
    margin-right: 0;
    margin-left: 0;
    @media (min-width:600px) {
        width: fit-content;
        opacity: 1;
        transform: translateZ(0);
        transition: all .5s cubic-besier(.455, .03, .515, .955) .15s;
    }
`
const Text = styled.p`
    padding-bottom: 0;
    line-height: 20px;
    font-size: 14px;
    max-inline-size: 75ch;
`
const Link = styled.a`
    box-shadow: 0 1px 0 0 currentColor;
    cursor: pointer;
`
const BottomLeft = styled.div`
    grid-area: aside;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    inline-size: 100%;
    margin-inline: 0;
    inset-inline-start: 0;
    flex-grow: 1;
`

const Buttons = styled.div`
    display:flex;
    justify-content: flex-end;
    -webkit-box-pack: end;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-box-align: start;
    max-width: 432px;
    margin: 16px 0;
    flex-grow: 1;
    margin-inline-start: 0;
    margin-inline-end: 0;
    text-align: start;
    align-items: flex-end;
        @media (min-width:600px) {
            opacity: 1;
            transform: translateZ(0);
            transition: all .5s cubic-bezier(.455, .03, .515, .955) .15s;
        }
`

const Button1 = styled(Button)`
    display: flex;
    margin-right: 12px;
    border-color: #000;
    -webkit-box-pack: end;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    appearance: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #171a20 !important;
    flex-flow: row nowrap;
    font-size: 12px;
    font-weight: 500;
    margin-inline-end: 12px;
    outline: none;
    padding: 0;
    white-space: nowrap;
    overflow: visible;
    line-height: inherit;
    align-items: center;
    span > svg {
            font-size: 25px !important;
            border: 1px solid;
            border-radius: 30px;
        }
        &:hover {
            background-color: ${props => props.color || "#171a20"} !important;
            color: #fff !important;
            border-radius: calc(40px/2);
            span > svg {
                fill: #fff !important;
                border-color: blueviolet;
            }
        }
    `

const ButtonContainer = styled.div`
    margin-top: 16px;
    display: block;
    gap: 16px 24px;
    width: fit-content
`

const  ButtonText = styled.span`
    overflow-wrap: anywhere;
    width: 100%;
    color: #171a20;
`

const ButtonLink = styled.a`
    margin-left: 0;
    margin-right: 0;
    display: inline;
    border-radius: calc(40px/2);
    border: 3px solid #171a20;
    color: #171a20;
    align-items: center;
    background-color: transparent;
    padding: 4px 24px;
    block-size: 40px;
    box-shadow: inset 0 0 0 2px transparent;
    display: inline-flex;
    backdrop-filter: none;
    margin-bottom: 0;
    margin-top: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    font-size: 12px;
    font-weight: 500;
    justify-content: 500;
    line-height: 1.2;
    position: relative;
    text-align: center;
    transition: border-color 0.33s ease 0s, background-color 0.33s ease 0s, color 0.33s ease 0s, box-shadow 0.25s ease 0s;
    &:hover {
        background-color: #171a20;
        ${ButtonText} {
            color: #fff;
        }
    }
    @media (min-width: 600px) {
        max-width: 100%;
        min-width: 204px;
        width: auto;
        inline-size: auto;
    }
`

