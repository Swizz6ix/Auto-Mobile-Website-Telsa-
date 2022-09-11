import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function PictureCard({PicCard1, PicCard2, PicCard3, rightArea, leftArea, margin, picHeader1, picHeader2, picHeader3, picText1, picText2, picText3, mobileImg1, mobileImg2, mobileImg3}) {
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
                    <PicCard rightArea={rightArea} >
                        <ImageContainer>
                            <ImageContent>
                                <picture>
                                    <source srcSet={mobileImg1} media='(max-width: 599px) and (orientation: portrait)'  />
                                    <source srcSet={PicCard1} media='(max-width: 899px) and (orientation: landscape)'   />
                                    <source srcSet={PicCard1} media='(min-width: 900px) and (orientation: landscape)' />
                                    <source srcSet={PicCard1} media='(min-width: 600px) and (orientation: portrait)' />
                                    <Image margin={margin} alt = '' src = {PicCard1} />
                                </picture>
                            </ImageContent>
                        </ImageContainer>
                        <TextContainer>
                            <TextContent>
                                <Header>
                                    {picHeader1}
                                </Header>
                                <Text>
                                    {picText1}
                                </Text>
                            </TextContent>
                        </TextContainer>
                    </PicCard>
                    </Fade>
                    <Fade bottom>
                    <PicCardLeft  leftArea={leftArea}>
                        <ImageContainer>
                            <ImageContent>
                                <picture>
                            <source srcSet={mobileImg2} media='(max-width: 599px) and (orientation: portrait)'  />
                            <source srcSet={PicCard2} media='(max-width: 899px) and (orientation: landscape)'   />
                            <source srcSet={PicCard2} media='(min-width: 900px) and (orientation: landscape)' />
                            <source srcSet={PicCard2} media='(min-width: 600px) and (orientation: portrait)' />
                            <Image margin={margin} alt = '' src = {PicCard2} />
                        </picture>
                            </ImageContent>
                        </ImageContainer>
                        <TextContainer>
                            <TextContent>
                                <Header>
                                    {picHeader2}
                                </Header>
                                <Text>
                                    {picText2}
                                </Text>
                            </TextContent>
                        </TextContainer>
                    </PicCardLeft>
                    </Fade>
                    <Fade bottom>
                    <PicCard rightArea={rightArea}>
                        <ImageContainer>
                            <ImageContent>
                                <picture>
                                    <source srcSet={mobileImg3} media='(max-width: 599px) and (orientation: portrait)'  />
                                    <source srcSet={PicCard3} media='(max-width: 899px) and (orientation: landscape)'   />
                                    <source srcSet={PicCard3} media='(min-width: 900px) and (orientation: landscape)' />
                                    <source srcSet={PicCard3} media='(min-width: 600px) and (orientation: portrait)' />
                                    <Image margin={margin} alt = '' src = {PicCard3} />
                                </picture>
                            </ImageContent>
                        </ImageContainer>
                        <TextContainer>
                            <TextContent>
                                <Header>
                                    {picHeader3}
                                </Header>
                                <Text>
                                    {picText3}
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

export default PictureCard

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
    margin-block-end: 70px;
`

const PicCard = styled.section`
    width: 100%;
    max-inline-size: 1440px;
    margin-inline-end: auto;
    margin-inline-start: auto;
    @media (min-width: 600px) {
        margin-inline-end: ${props => props.rightArea && '0px'};
        margin-inline-start: ${props => props.leftArea && '-12px'};
        margin-bottom: 0;
        margin-top: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin:Area
        transition: padding 0.15s ease-in-out 0s;
    }

    @media (min-width: 900px) {
        grid-template-areas: '${props => props.rightArea || ". main main main main main . aside aside aside aside ."}';
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
        margin-inline-start: ${props => props.leftArea && '0'};
        margin-inline-end: ${props => props.leftArea  && "-12px" };
    }
    @media (min-width: 900px) {
        grid-template-areas: '${props => props.leftArea || ". aside aside aside aside . main main main main main ."}';
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
    margin-left: ${props => props.margin || '0px'};
    margin-right: ${props => props.margin && '0px' || '-12px'};
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
    margin-inline-end: ${props => props.margin && '0px' || '-12px'};
    margin-inline-start: ${props => props.margin || '0px'};
    margin-top: 0;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
    }
`
const ImageLeft = styled(Image)`
    margin-right: ${props => props.margin || '0px'};
    margin-left: ${props => props.margin && '0px' || '-12px'};
    margin-inline-end: ${props => props.margin || '0px'};
    margin-inline-start: ${props => props.margin && '0px' || '-12px'};
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
        margin-block-start: px;
    }
`

const Text = styled.p`
    color: #fff;
    padding-bottom: 14px;
    line-height: 20px;
    font-weight: 14px;
`