import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function PicVidCard({picVid1, picVideo, picVid2, picVidHeader1, picVidHeader2, picVidHeader3, picVidText1, picVidText2, picVidText3}) {
  return (
    <Wrap>
        <Container>
            <OutterContainer>
                <Empty>
                <EmptyText>&nbsp;</EmptyText>
                <EmptyText>&nbsp;</EmptyText>
            </Empty>
            <Contents>
                <InnerContents>
                    <Fade bottom>
                    <PicCard>
                        <ImageContainer>
                            <ImageContent>
                                <Image alt = 'Product Image' src = {picVid1} />
                            </ImageContent>
                        </ImageContainer>
                        <TextContainer>
                            <TextContent>
                                <Header>
                                    {picVidHeader1}
                                </Header>
                                <Text>
                                    {picVidText1}
                                </Text>
                            </TextContent>
                        </TextContainer>
                    </PicCard>
                    </Fade>
                    <Fade bottom>
                    <PicCardLeft>
                        <ImageContainer>
                            <ImageContent>
                                <Video muted autoPlay loop>
                                    <source alt = 'Product Video' src = {picVideo} />
                                </Video>
                            </ImageContent>
                        </ImageContainer>
                        <TextContainer>
                            <TextContent>
                                <Header>
                                    {picVidHeader2}
                                </Header>
                                <Text>
                                    {picVidText2}
                                </Text>
                            </TextContent>
                        </TextContainer>
                    </PicCardLeft>
                    </Fade>
                    <Fade bottom>
                    <PicCard>
                        <ImageContainer>
                            <ImageContent>
                                <Image alt = 'product image' src = {picVid2} />
                            </ImageContent>
                        </ImageContainer>
                        <TextContainer>
                            <TextContent>
                                <Header>
                                    {picVidHeader3}
                                </Header>
                                <Text>
                                    {picVidText3}
                                </Text>
                            </TextContent>
                        </TextContainer>
                    </PicCard>
                    </Fade>
                </InnerContents>
            </Contents>
            </OutterContainer>
        </Container>
    </Wrap>
  )
}

export default PicVidCard

const Wrap = styled.div`
    padding-left: 0px;
    padding-right: 0px;
    padding-inline-end: 0px;
    padding-inline-start: 0px;
    display: block;
    max-width: 100%;
    inline-size: 100%;
    margin-inline-end: auto;
    margin-inline-start: auto;
    background: #000;
`

const Container = styled.section`
    display: flex;
    flex: 1 1 0%;
    @media (min-width: 600px) {
        flex-flow: row wrap;
    }
`

const OutterContainer = styled.div``

const Empty = styled.div`
    opacity: 1;
    transform: translateZ(0px);
    z-index: auto;
    transition: transform 1500ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 1500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    background: #000;
`

const EmptyText = styled.p`
    padding-bottom: 14px;
    line-height: 20px;
    display: block;
`
const Contents = styled.div`

`

const InnerContents = styled.div`
    padding-block-end: 16px;
    padding-block-start: 16px;
    background: #000;
`

const PicCard = styled.section`
    width: 100%;
    max-inline-size: 1440px;
    margin-inline-end: auto;
    margin-inline-start: auto;
    @media (min-width: 600px) {
        margin-inline-end: -12px;
        margin-bottom: 0;
        margin-top: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: auto;
        transition: padding 0.15s ease-in-out 0s;
    }

    @media (min-width: 900px) {
        grid-template-areas: ". main main main main main . aside aside aside aside .";
        padding-inline-end: 40px;
        padding-inline-start: 40px;
    }
    @media (max-width: 599px) {
        padding-inline-end: 24px;
        padding-inline-start: 24px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        max-width: 100vw;
    }
`
const PicCardLeft = styled(PicCard)`
    media (min-width: 600px) {
        margin-inline-start: -12px;
    }
    @media (min-width: 900px) {
        grid-template-areas: ". aside aside aside aside . main main main main main .";
    }
`

const ImageContainer = styled.section`
    display: flex;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    grid-area: main / main / main / main;
    width: 100%;
    flex-flow: column nowrap;
    @media (min-width: 600px) {
        padding-left: 0px;
        padding-inline-start: 0px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        grid-area: main;
    }
`

const ImageContent = styled.div`
    height: auto;
    position: relative;
    width: calc(100% + 12px);
    overflow: visible;
    @media (min-width: 600px) {
        inline-size: calc(100% + 12px);
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        width: calc(100% + 48px);
        margin-left: calc(24px * -1);
        margin-right: calc(24px * -1);
        margin-inline-end: calc(24px * -1);
        margin-inline-start: calc(24px * -1);
    }
`

const Image = styled.img`
    object-position: center center;
    object-fit: cover;
    margin-left: 0px;
    margin-right: -12px;
    left: 0;
    bottom: 0;
    top: 0;
    position: static;
    display: block;
    width: 100%;
    height: auto;
    min-width: 0;
    max-width: none;
    inset-inline-start: 0;
    margin-inline-end: -12px;
    margin-inline-start: 0;
    margin-top: 0;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
    }
`
const Video = styled.video`
    margin-right: 0;
    margin-left: -12px;
    margin-inline-end: 0px;
    margin-inline-start: -12px;
    object-position: center center;
    object-fit: cover;
    left: 0;
    bottom: 0;
    top: 0;
    position: static;
    display: block;
    width: 100%;
    height: auto;
    min-width: 0;
    max-width: none;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
    }
`

const TextContainer = styled.section`
    grid-area: aside / aside / aside / aside;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-flow: column nowrap;
    inline-size: 100%;
    inset-inline-start: 0;
    margin-inline: 0;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        grid-area: aside;
    }
`

const TextContent = styled.div`
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        padding-bottom: 48px;
        padding-top: 24px;
    }
`

const Header = styled.h4`
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.4px;
    opacity: 1;
    @media (min-width: 600px) {
        font-size: 20px;
        letter-spacing: -0.4px;
        line-height: 28px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        margin-inline-end: 0;
        margin-inline-start: 0;
        padding-block-end: 0px;
        padding-block-start: 0px;
        margin-block-end: 10px;
        margin-block-start: 0px;
    }
`

const Text = styled.p`
    color: #fff;
    padding-bottom: 14px;
    line-height: 20px;
    font-weight: 14px;
`