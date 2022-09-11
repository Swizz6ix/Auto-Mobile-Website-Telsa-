import React, {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


function LineSlider({LinePic1, LinePic2, LinePic3, LinePic4, mobileImg1, mobileImg2, mobileImg3, mobileImg4, background, lineHeader, lineTextM, lineTextW, lineTextUP1, lineTextUP2, lineTextUP3, lineTextUP4, lineTextDwn01, lineTextDwn02, lineTextDwn03, lineTextDwn11, lineTextDwn12, lineTextDwn13, lineTextDwn21, lineTextDwn22, lineTextDwn23, lineTextDwn31, lineTextDwn32, lineTextDwn33, lineTextBody1, lineTextBody2, lineTextBody3, lineTextBody4, liteText01, liteText02, liteText03, liteText11, liteText12, liteText13, liteText21, liteText22, liteText23, liteText31, liteText32, liteText33, font, width}) {
    const lineSlides = [
        {
            id: 0,
            textUp: [lineTextUP1],
            textDown1: [lineTextDwn01],
            textDown2: [lineTextDwn02],
            textDown3: [lineTextDwn03],
            textBody: [lineTextBody1],
            liteText1: [liteText01],
            liteText2: [liteText02],
            liteText3: [liteText03],
        },
        {
            id: 1,
            textUp: [lineTextUP2],
            textDown1: [lineTextDwn11],
            textDown2: [lineTextDwn12],
            textDown3: [lineTextDwn13],
            textBody: [lineTextBody2],
            liteText1: [liteText11],
            liteText2: [liteText12],
            liteText3: [liteText13],
        },
        {
            id: 2,
            textUp: [lineTextUP3],
            textDown1: [lineTextDwn21],
            // textDown2: [lineTextDwn22],
            // textDown3: [lineTextDwn23],
            textBody: [lineTextBody3],
            // liteText1: [liteText21],
            // liteText2: [liteText22],
            // liteText3: [liteText23],
        },
        {
            id: 3,
            textUp: [lineTextUP4],
            // textDown1: [lineTextDwn31],
            // textDown2: [lineTextDwn32],
            // textDown3: [lineTextDwn33],
            textBody: [lineTextBody4],
            // liteText1: [liteText31],
            // liteText2: [liteText32],
            // liteText3: [liteText33],
        },
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
            // mood: "free-snap"
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false

                function clearNextTimeOut() {
                    clearTimeout(timeout)
                }

                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver)
                    return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 5000)
                }

                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeOut()
                    })
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeOut)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
  return (
    <Wrap background={background}>
        <Container>
            <HeaderContainer>
                <HeaderOutter>
                        <Fade bottom>
                    <HeaderContents background={background}>
                        <HeaderIneer>
                            <HeaderBold>
                                <HeaderHeader>
                                    {lineHeader}
                                </HeaderHeader>
                            </HeaderBold>
                            <HeaderText>
                                <TextWeb>
                                    {lineTextW}
                                </TextWeb>
                                <TextMobile>
                                    {lineTextM}
                                </TextMobile>
                            </HeaderText>
                        </HeaderIneer>
                    </HeaderContents>
                        </Fade>
                </HeaderOutter>
            </HeaderContainer>
            <MediaContainer background={background}>
                <ImageContents>
                    <ImageInner>
                        <ImageContainer>
                            <ImageHolder className='keen-slider' ref={sliderRef}>
                                {LinePic1 &&
                                    <picture>
                                        <source srcSet={mobileImg1} media='(max-width: 599px) and (orientation: portrait)'  />
                                        <source srcSet={LinePic1} media='(max-width: 899px) and (orientation: landscape)'   />
                                        <source srcSet={LinePic1} media='(min-width: 900px) and (orientation: landscape)' />
                                        <source srcSet={LinePic1} media='(min-width: 600px) and (orientation: portrait)' />
                                        <Image className='keen-slider__slide number-slider1' src={LinePic1} alt='' />
                                    </picture>
                                }
                                {LinePic2 && 
                                <picture>
                                    <source srcSet={mobileImg2} media='(max-width: 599px) and (orientation: portrait)'  />
                                    <source srcSet={LinePic2} media='(max-width: 899px) and (orientation: landscape)'   />
                                    <source srcSet={LinePic2} media='(min-width: 900px) and (orientation: landscape)' />
                                    <source srcSet={LinePic2} media='(min-width: 600px) and (orientation: portrait)' />
                                    <Image className='keen-slider__slide number-slider2' src={LinePic2} alt='' />
                                </picture>
                                }
                                {LinePic3 && 
                                    <picture>
                                        <source srcSet={mobileImg3} media='(max-width: 599px) and (orientation: portrait)'  />
                                        <source srcSet={LinePic3} media='(max-width: 899px) and (orientation: landscape)'   />
                                        <source srcSet={LinePic3} media='(min-width: 900px) and (orientation: landscape)' />
                                        <source srcSet={LinePic3} media='(min-width: 600px) and (orientation: portrait)' />
                                        <Image className='keen-slider__slide number-slider3' src={LinePic3} alt='' />
                                    </picture>
                                }
                                {LinePic4 && 
                                    <picture>
                                        <source srcSet={mobileImg4} media='(max-width: 599px) and (orientation: portrait)'  />
                                        <source srcSet={LinePic4} media='(max-width: 899px) and (orientation: landscape)'   />
                                        <source srcSet={LinePic4} media='(min-width: 900px) and (orientation: landscape)' />
                                        <source srcSet={LinePic4} media='(min-width: 600px) and (orientation: portrait)' />
                                        <Image className='keen-slider__slide number-slider4' src={LinePic4} alt='' />
                                    </picture>
                                }
                            </ImageHolder>
                        </ImageContainer>
                    </ImageInner>
                </ImageContents>
            </MediaContainer>
            <TextContainer background={background}>
                <TextContents>
                    <TextInner>
                        <Fade bottom>
                            {loaded && instanceRef.current && (
                                <TextHolder className='dots'>
                                            {lineSlides.map((slide, idx) => (
                                                <TextBox width={width} onClick = {() => {
                                                    instanceRef.current?.moveToIdx(idx)}} className={"dot" + (slide.id === currentSlide? "active" : "nonAct")}>
                                                        <TextUpper>
                                                        {slide.textUp} 
                                                        </TextUpper>

                                                        <TextBody font={font}>
                                                            {slide.textBody}
                                                        </TextBody>
                                                            {slide.textDown3 && 
                                                        <TextDwn>
                                                            <TextLower >
                                                                {slide.textDown1}
                                                                <TextLite>
                                                                    {slide.liteText1}
                                                                </TextLite>
                                                            </TextLower>
                                                            <TextLower >
                                                                {slide.textDown2}
                                                                <TextLite>
                                                                    {slide.liteText2}
                                                                </TextLite>
                                                            </TextLower>
                                                            <TextLower >
                                                                {slide.textDown3}
                                                                <TextLite>
                                                                    {slide.liteText3}
                                                                </TextLite>
                                                            </TextLower>
                                                        </TextDwn>
                                                            }
                                                </TextBox>
                                            ))}
                                </TextHolder>
                            )}
                        </Fade>
                    </TextInner>
                </TextContents>
            </TextContainer>
        </Container>
    </Wrap>
  )
}

export default LineSlider

const Wrap = styled.div`
    padding-bottom: 48px;
    padding-top: 0px;
    display: grid;
    max-width: 100vw;
    scroll-behavior: smooth;
    width: 100%;
    overflow: hidden;
    background-color: ${props => props.background || "#fff"};
`

const Container = styled.section`
    display: flex;
    Justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-flow: column nowrap;
    grid-area: 1 / -1 / auto / auto;

`

const HeaderContainer = styled.section`
    padding-top: 72px;
    flex-grow: 1;
    width: 100%;
`

const HeaderOutter = styled.section`
    max-inline-size: 100%;
    margin: 0;
    display: block;
    height: auto;
    flex-flow: row nowrap;
    align-items: start;

    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        width: 100vw;
    }
`

const HeaderContents = styled.section`
    height: auto;
    background-color: ${props => props.background || "#fff"};
    width: 100%;
    padding-inline-end: 40px;
    padding-inline-start: 40px;
    max-inline-size: 1440px;
    margin-inline-end: auto;
    margin-inline-start: auto;
    @media (min-width: 900px) {
    grid-template-areas: " . main main main main main main main main main main . ";
    }

    @media (min-width: 600px) {
        margin-bottom: 0px;
        margin-top: 0px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: auto;
        transition: padding 0.15s ease-in-out 0s;
    }
`

const HeaderIneer = styled.section`
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    grid-area: main / main / main / main;
    @media (min-width: 600px) {
        padding-left: 0;
        padding-inline-start: 0px;
    }
`

const HeaderBold = styled.span`
    margin-left: 0;
    margin-right: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    text-align: start;
    padding-top: 16px;
    color: #171a20;
    font-weight: 500;
    padding-block-start: 32px;
    padding-block-end: 8x;
    @media (min-width: 600px) {
        width: fit-content;
        letter-spacing: -0.5px;
        font-size: 28px;
        line-height: 36px;
    }
`

const HeaderHeader = styled.span`
    display: block;
    @media (min-width: 600px) {
        opacity: 1;
        transform: translateZ(0px);
        transition: all 0,5s cubic-bezier(0.455, 0.03 0.515, 0.955) 0.15s;
    }
`

const HeaderText = styled(HeaderHeader)`
    margin-left: 0;
    margin-right: 0;
    margin-inline-end: auto;
    // margin-inline-start: auto;
    text-align: start;
    padding-bottom: 16px;
    padding-top: 16px;
    @media (min-width: 600px) {
        width: fit-content;
    }
`

const TextWeb = styled.div``

const TextMobile = styled.div`
    display: none;
`

const MediaContainer = styled.section`
    padding-top: 56px;
    background-color:${props => props.background || "#fff"};
    width: 100%;
    max-inline-size: 1440px;
    margin-inline-end: auto;
    margin-inline-start: auto;
    padding-inline-end: 24px;
    padding-inline-start: 24px;

    @media (min-width: 900px) {
        padding-inline-end: 40px;
        padding-inline-start: 40px;
    }
    @media (min-width: 600px) {
        margin-bottom: 0;
        margin-top: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: 0;
        transition: padding 0.15s ease-in-out 0s;
    }
`

const ImageContents = styled.section`
    grid-column: 1 / 13;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    @media (min-width: 600px) {
        padding-left: 0px;
        padding-inline-start: 0px;
    }
`

const ImageInner = styled.section`
    aspect-ratio: 16/9;
    position: relative;
    z-index: 2;
    border-radius: 20px;
    grid-area: 1 / -1;
    overflow: hidden;
    inline-size: 100%;

    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        margin-left: calc(24px*-1);
        margin-right: calc(24px*-1);
        margin-inline-end: calc(24px*-1);
        margin-inline-start: calc(24px*-1);
        aspect-ratio: 16/9;
        width: 100vw;
        border-radius: 0px;
    }
`

const ImageContainer = styled.div`
    left: calc(24px * -1);
    width: calc(100% + 48px);
    height: 100%;
    overflow: hidden;
    position: absolute;
    // transform:
    inset-inline-start: calc(24px * -1);
    // inset-inline-end: calc(24px * -1);
`

const ImageHolder = styled.section`
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(1);
    width: 100%;
    overflow: visible;
    @media (min-width: 900px) {
        aspect-ratio: 50%;
        transform: translateY(-50%) scale(1);
        block-size: 100%;
        position: absolute;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    bottom: 0;
    top: 0;
    left:0;
    display: block;
    object-fit: cover;
    object-position: center center;
    min-width: 0;
    max-width: none;
    inset-inline-start: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    position: static;
    
`

const TextContainer = styled.section`
    width: 100%;
    background-color:${props => props.background || "#fff"};
    max-inline-size: 1440px;
    margin-inline-end: auto;
    margin-inline-start: auto;

    @media (min-width: 900px) {
        grid-template-areas: ". . main main main main main main main main.";
        padding-inline-end: 40px;
        padding-inline-start: 40px;
    }

    @media (min-width: 600px) {
        margin-bottom: 0px;
        margin-top: 0px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: auto;
        transition: padding 0.15s ease-in-out 0s;
`

const TextContents = styled.section`
    display: flex;
    width: 100%;
    grid-area: main / main / main / main; 
    flex-flow: column nowrap;
    @media (min-width: 600px) {
        padding-left: 0px;
        padding-inline-start: 0px;

`

const TextInner = styled.section`
    padding-bottom: 72px;
    padding-top: 72px;
    width: 100%;
`
const TextHolder = styled.div`
    display: flex;
    align-items: flex-start;
    height: auto;
    position: relative;
    gap: 24px;
    overflow: hidden;
    justify-content: flex-start;
    // block-size: 40px;
    // height: 40px;
    // flex-direction: column;
    @media (min-width: 900px) {
        grid-auto-columns: minmax(0px, 1fr);
        grid-auto-flow: column;
    }
    @media (max-width: 599px) {
        gap: 0;
    }

    .slide__bar {
        display: flex;
        gap: 39px;
    }

    .slide__text {
        display: flex;
        gap: 24px;
        align-items: flex-start;
        height: auto;
        position: relative;
        overflow: hidden;
        justify-content: flex-start;
        // flex-direction: column;
        @media (min-width: 900px) {
            grid-auto-columns: minmax(0px, 1fr);
            grid-auto-flow: column;
        }
    }

    .dotactive {
        // border: 1px;
        color: #000;
        opacity: 1;
    }

    .dotnull {
        opacity: 0.4;
    }

    .dotnonAct {
        border: 1px;
    }
`

const TextBar = styled.button`
    .bar {
        box-shadow: inset 0 4px 0 0;
        border-top: 4px solid red;
        height: 5px;
        width: 10vw;
        background: red;
        // color: red;
    }
`

const TextBox = styled.button`
    box-shadow: inset 0 4px 0 0;
    opacity: 0.4;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: visible;
    scroll-snap-align: center;
    position: relative;
    height: 100%;
    flex-flow: column nowrap;
    block-size: calc(auto - 8px);
    outline-offset: -2px;
    line-height: 1.2;
    background-color: transparent;
    border: none;
    appearance: none;

    @media (max-width: 599px) {
        margin-left: 24px;
        margin-inline-start: 24px;
        width: ${props => props.width || "42vw"};
    }
`

const TextUpper = styled.span`
    text-align: left;
    padding-top: 16px;
    padding-bottom: 0px;
    overflow-wrap: anywhere;
    flex-grow: 1;
    color: #a171a20;
    font-weight: 600;
    letter-spacing: 0;
    // padding-block-end: 8px;
    // padding-block-start: 32px;

    @media (min-width: 600px) {
        font-size: 17px;
        line-height: 20px;
    }
    @media (max-width: 599px) {
        top: calc(4px * 5);
        font-size: 14px;
        line-height: 20px;
    }
`

const TextBody = styled.p`
    text-align: left;
    padding-top: 15px;
    font-weight: 500;
    font-size: ${props => props.font || "16px"};

    @media (max-width: 599px) {
        top: calc(4px * 5);
        font-size: 14px;
        line-height: 20px;
    }
`
const TextDwn = styled.div`
    display: grid;
    align-items: flex-end;
    flex-grow: 1;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    gap: 48px;
    width: 100%;

    @media (max-width: 599px) {
        grid-auto-flow: row;
        grid-auto-rows: max-content;
        gap: 16px;
    }
`

const TextLower = styled.div`
    text-align: left;
    padding-block-start: 16px;
    color: #a171a20;
    font-weight: 500;
    letter-spacing: -0.5px;
    // padding-block-end: 8px;
    // padding-block-start: 32px;
    transition: font 0.33s ease 0s, color 0.33s ease 0s, opacity 0.33s ease 0s;

    @media (min-width: 600px) {
        font-size: 28px;
        line-height: 36px;
    }
    @media (max-width: 599px) {
        top: calc(4px * 6);
        letter-spacing: -0.5px;
        font-size: 20px;
        line-height: 28px;
    }
`
const TextLite = styled.p`
    font-weight: 500;
    font-size: 12px;
`
