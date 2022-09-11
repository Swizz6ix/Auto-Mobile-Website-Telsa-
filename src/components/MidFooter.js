import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function MidFooter({midHeader, midtext, midBtn1, midBtn2, bgC, clor, midLink, midImg, justify, size, mobileImg}) {
  return (
    <Outter>
        <Fade bottom>
        <Container bgC={bgC}>
            <Contents>
                <ContentBoxes justify={justify}>
                    <TextArea>
                        <Fade bottom>
                        <InnerArea>
                            <Header clor={clor}>
                                {midHeader}
                            </Header>
                            <Text clor={clor}>
                                {midtext}
                            </Text>
                            <Fade bottom>
                            <Buttons>
                                <InnerContents size={size}>
                                    <ButtonLinks clor={clor}>
                                        <ButtonText clor={clor}>
                                            {midBtn1}
                                        </ButtonText>
                                    </ButtonLinks>
                                    <ButtonLinks2 clor={clor}>
                                        <ButtonText2 clor={clor}>
                                            {midBtn2}
                                        </ButtonText2>
                                    </ButtonLinks2>
                                </InnerContents>
                            </Buttons>
                            </Fade>
                            <BottomLink>
                                <br />
                                <Link clor={clor}>
                                    {midLink}
                                </Link>
                            </BottomLink>
                        </InnerArea>
                        </Fade>
                    </TextArea>
                    {midImg && 
                    <ImageArea>
                        <Fade bottom>
                        <ImageContainer>
                            <picture>
                                <source srcSet={mobileImg} media='(max-width: 599px) and (orientation: portrait)'  />
                                <source srcSet={midImg} media='(max-width: 899px) and (orientation: landscape)'   />
                                <source srcSet={midImg} media='(min-width: 900px) and (orientation: landscape)' />
                                    <source srcSet={midImg} media='(min-width: 600px) and (orientation: portrait)' />
                                <Image alt = 'Footer Image' src = {midImg} />
                            </picture>
                        </ImageContainer>
                        </Fade>
                    </ImageArea>
                    }
                </ContentBoxes>
            </Contents>
        </Container>
                        </Fade>
    </Outter>
  )
}

export default MidFooter

const Outter = styled.section`
    height: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-pack: center;
    position: relative;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    width: 100%;
    flex-flow: column nowrap;
    @media (min-width: 600px) {
        min-height: 100vh;
    }
`

const Container = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #222;
    background: ${props => props.bgC || '#000'};
    color: #d0d1d2;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 0px;
    padding-top: 0px;
    @media (min-width: 600px) {
        text-align: center;
    }
`

const Contents = styled.section`
    margin-inline-end: auto;
    margin-inline-start: auto;
    max-inline-size: 1440px;
    width: 100%;
    margin-bottom: 0px;
    margin-top: 0px;
    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: auto;
        transition: padding 0.15s ease-in-out 0s;
    }
    @media (min-width: 900px) {
        grid-template-areas: "....main main main main . . . .";
        padding-inline-end: 40px;
        padding-inline-start: 40px;
    }
`
const ContentBoxes = styled.section`
    grid-area: main;
    @media (min-width: 600px) {
        display: flex;
        justify-content: ${props => props.justify || 'space-between' };
        flex-flow: row nowrap;
        height: 100%;
        width: 100%;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
    }

    @media (min-width: 900px) {
        grid-column: 2/12;
    }
`

const TextArea = styled.section`
    display: flex;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-inline-end: auto;
    margin-inline-start: auto;
    max-inline-size: 1440px;
    grid-area: main / main / main / main;
    @media (min-width: 600px) {
        padding-left: 0px;
        display: flex;
        width: 100%;
        padding-inline-start: 0px;
    }

    @media (min-width: 900px) {
        flex-grow: 0;
        width: calc(45% - 13.2px)
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        max-width: 100%;
        padding-inline-end: 24px;
        padding-inline-start: 24px;
    }
`

const InnerArea = styled.div`
    width: 100%;
`

const Header = styled.span`
    padding-bottom: 16px;
    padding-top: 0;
    display: block;
    margin: 0px;
    color: ${props => props.clor || '#fff'};
    font-weight: 500;
    letter-spacing: -0.5px;
    padding-block-end: 8px;
    padding-block-start: 32px;
    transition: font 0.33s ease 0s, color 0.33s ease 0s, opacity 0.33s ease 0s;
    @media (min-width: 600px) {
        letter-spacing: -0.5px;
        font-size: 28px;
        line-height: 36px;
    }
    @media (max-width: 599px) {
        letter-spacing: -0.6px;
        font-size: 24px;
        line-height: 28px;
    }
`

const Text = styled.p`
    padding-bottom: 16px;
    color: ${props => props.clor || '#e2e3e3'};
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 0;
    padding-top: 0;
`

const InnerContents = styled.section`
    display: grid;
    grid-auto-columns: minmax(0px, 1fr);
    grid-auto-flow: row;
    justify-content: center;
    width: fit-content;
    min-inline-size: ${props => props.size || '204px'};
    gap: 16px 24px;
    grid-auto-flow: row;
    @media (max-width: 899px) {
        // min-inline-size: auto;
    }
`


const  ButtonText = styled.span`
    overflow-wrap: anywhere;
    width: 100%;
    color: #f4f4f4;
`
const ButtonText2 = styled(ButtonText)`
    color: ${props => props.clor || '#171a20'}
`

const ButtonLinks = styled.a`
    margin-left: 0;
    margin-right: 0;
    color: ${props => props.clor || '#f4f4f4'};
    display: inline;
    border-radius: calc(40px/2);
    border: 3px solid #f4f4f4;
    align-items: center;
    background-color: ${props => props.clor || 'transparent'};
    border-color: ${props => props.clor || '#f4f4f4'};
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
    justify-content: center;
    line-height: 1.2;
    position: relative;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.33s ease 0s, background-color 0.33s ease 0s, color 0.33s ease 0s, box-shadow 0.25s ease 0s;
    @media (min-width: 600px) {
        max-width: none;
        min-width: 0;
        width: auto;
        inline-size: auto;
    }
    @media (max-width: 900px) {
        // inline-size: 134px;
    }
    @media (max-width: 599px) {
        // inline-size: 305px;
    }
    &:hover {
        background-color: #fff;
        ${ButtonText} {
                color: #171a20;
            }
    }
`

const ButtonLinks2 = styled(ButtonLinks)`
    background-color: #fff;
    color: #000;
    &:hover {
        background-color: transparent;
        border-color: #222;
        &:hover {
            background-color: ${props => props.clor || 'transparent'};
            ${ButtonText} {
                color: #fff;
            }
        }
    }
`

const BottomLink = styled.div``

const Link = styled.a`
    margin: calc(24px + 4px * -1);
    color: ${props => props.clor || '#e2e3e3'};
    background: transparent;
    box-shadow: 0 1px 0 0 currentColor;
    cursor: pointer;
    position: relative;
    text-align: initial;
    border-width: 0;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 0;
    -webkit-box-direction: normal;
    transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75), color 0.33s ease;
    line-height: 20px;
    font-size: 14px;
    height: calc(100vh - 56px - 52px);
    height: 70px;
    @media (min-width: 600px) {
        height: 52px;
    }
`

const ImageArea = styled(TextArea)`
    @media (max-width: 599px) {
        // padding-top: 32px;
        // inline-size: 100%;
        // block-size: 100vh;
    }
`

const ImageContainer = styled.div`
    height: auto;
    overflow: visible;
    position: relative;
    width: calc(50vw - 72px);
`

const Image = styled.img`
    display: block;
    margin-left: 0;
    margin-right: 0;
    left: 0;
    bottom: 0;
    inset-inline-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    object-fit: cover;
    object-position: center center;
    position: relative;
    width: calc(50vw - 72px);
    height: auto;
`