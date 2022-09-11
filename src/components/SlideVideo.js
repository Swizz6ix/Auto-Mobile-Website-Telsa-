import React, {useState} from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function SlideVideo({SlideVideo1, SlideVideo2, SlideVideo3, SlideVideo4, slideHeader, slideText, slideTextM, slideLite, slideBtn, slideLink, slideText1, slideTextUP1, slideTextUP2, slideTextUP3, slideTextUP4, slideTextDwn1, slideTextDwn2, slideTextDwn3, slideTextDwn4, lastChild}) {
    const labels = [
        {
            id: 0,
            textUp: [slideTextUP1],
            textDown: [slideTextDwn1],
        },
        {
            id: 1,
            textUp: [slideTextUP2],
            textDown: [slideTextDwn2],
        },
        {
            id: 2,
            textUp: [slideTextUP3],
            textDown: [slideTextDwn3],
        },
        {
            id: 3,
            textUp: [slideTextUP4],
            textDown: [slideTextDwn4],
            display: [],
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
                    }, 15000)
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
    <Wrap>
        <Container>
            <HeaderContainer>
                <Fade bottom>
                <HeaderOutter>
                    <HeaderContents>
                        {/* <HeaderIneer> */}
                            <HeaderBold>
                                <HeaderUp>
                                    {slideLite && 
                                    <HdLite>
                                        {slideLite}
                                    </HdLite>
                                    }
                                    {slideHeader && 
                                        <HeaderHeader>
                                            {slideHeader}
                                        </HeaderHeader>
                                    }
                                </HeaderUp>
                                <HeaderDown>
                                    <Button>
                                            {slideBtn && 
                                        <ButtonLink>
                                            <ButtonText>
                                                {slideBtn}
                                            </ButtonText>
                                        </ButtonLink>
                                            }
                                    </Button>
                                </HeaderDown>
                            </HeaderBold>
                            <HeaderText>
                                {slideText &&
                                <TextWeb>
                                    {slideText} <a>{slideLink}</a> {slideText1}
                                </TextWeb>
                                }
                                {slideTextM &&
                                <TextMobile>
                                    {slideText} <a>{slideLink}</a> {slideText1}
                                </TextMobile>
                                }
                            </HeaderText>
                    </HeaderContents>
                </HeaderOutter>
                </Fade>
            </HeaderContainer>
            <MediaContainer>
                <ImageContents>
                    <ImageInner>
                        <ImageContainer>
                            <ImageHolder className='keen-slider' ref={sliderRef}>
                                {SlideVideo1 && 
                                    <Video className='keen-slider__slide number-slider1' muted autoPlay loop>
                                        <source alt = "Product video" src = {SlideVideo1} type="video/mp4"  />
                                    </Video>
                                }
                                {SlideVideo2 && 
                                    <Video className='keen-slider__slide number-slider2' muted autoPlay loop>
                                        <source alt = "Product video" src = {SlideVideo2} type="video/mp4"  />
                                    </Video>
                                }
                                {SlideVideo3 && 
                                    <Video className='keen-slider__slide number-slider3' muted autoPlay loop>
                                        <source alt = "Product video" src = {SlideVideo3} type="video/mp4"  />
                                    </Video>
                                }
                                {SlideVideo4 && 
                                    <Video className='keen-slider__slide number-slider4' muted autoPlay loop>
                                        <source alt = "Product video" src = {SlideVideo4} type="video/mp4"  />
                                    </Video>
                                }
                            </ImageHolder>
                        </ImageContainer>
                    </ImageInner>
                </ImageContents>
            </MediaContainer>
            <TextContainer>
                <TextContents>
                    <Fade bottom>
                    <TextInner>
                        {loaded && instanceRef.current && (
                            <TextHolder>
                                {labels.map((label, idx) => (
                                    <TextBox lastChild={lastChild} onClick = {() => {
                                        instanceRef.current?.moveToIdx(idx)}} className={"dot" + (label.id === currentSlide? "active" : "nonAct")}>
                                            <TextUpper>
                                                {label.textUp}
                                            </TextUpper>
                                            <TextLower >
                                                {label.textDown}
                                            </TextLower>
                                        </TextBox>
                                            ))}
                            </TextHolder>
                        )}
                    </TextInner>
                    </Fade>
                </TextContents>
            </TextContainer>
        </Container>
    </Wrap>
  )
}

export default SlideVideo

const Wrap = styled.div`
    padding-bottom: 48px;
    padding-top: 0px;
    display: grid;
    max-width: 100vw;
    scroll-behavior: smooth;
    width: 100%;
    overflow: hidden;
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
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
            padding-top: 0px;
        }
`

const HeaderOutter = styled.section`
    max-inline-size: 100%;
    margin: 0;
    display: block;
    height: auto;
    flex-flow: row nowrap;
    align-items: start;
`

const HeaderContents = styled.section`
    height: auto;
    width: 100%;
    padding-inline-end: 40px;
    padding-inline-start: 40px;
    max-inline-size: 1440px;
    margin-inline-end: auto;
    margin-inline-start: auto;
    @media (min-width: 900px) {
    // grid-template-areas: " . main main main main main main main main main main . ";
    grid-template-areas: " . aside aside aside main main main main main main main . ";
        padding-inline-end: 40px;
        padding-inline-start: 40px;
    }

    @media (min-width: 900px) {
        margin-bottom: 0px;
        margin-top: 0px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: auto;
        transition: padding 0.15s ease-in-out 0s;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
            padding-inline-end: 24px;
            padding-inline-start: 24px;
        }
`

const HeaderIneer = styled.section`
    // height: auto;
    // display: flex;
    // flex-flow: column nowrap;
    // width: 100%;
    // grid-area: main / main / main / main;
    @media (min-width: 600px) {
        // padding-left: 0;
        // padding-inline-start: 0px;
    }
`

const HeaderBold = styled.div`
    grid-area: aside / aside / aside / aside;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    margin-inline: 0;
    inset-inline-start: 0;
    inline-size: 100%;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        display: block;
        }
`
const HeaderUp = styled.span`
    margin-right: 0;
    margin-left: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    text-align: start;
    padding-top: 16px;
    color: #171a20;
    font-weight: 500;
    @media (min-width: 600px) {
        width: fit-content;
        letter-spacing: -0.5px;
        font-size: 28px;
        line-height: 36px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        padding-top: 0;
        padding-bottom: 0;
        }
`

const HdLite = styled.span`
    font-size: 17px;
    letter-spacing: -0.4px;
    font-weight: 300;
    line-height: 1.414;
    display: block;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        font-size: 24px;
        letter-spacing: -0.6px;
        line-height: 28px;
        }
`

const HeaderHeader = styled.span`
    display: block;
    font-weight: 500;
    @media (min-width: 600px) {
        opacity: 1;
        transform: translateZ(0px);
        transition: all 0,5s cubic-bezier(0.455, 0.03 0.515, 0.955) 0.15s;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        font-size: 24px;
        letter-spacing: -0.6px;
        line-height: 28px;
        }
`
const HeaderDown = styled.div`
    margin: 16px 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    text-align: start;
    align-items: stretch;
    flex-grow: 0;
    max-width: 432px;
`

const Button = styled.section`
    min-inline-size: 204px;
    width: fit-content;
    gap: 16px 24px;
`
const ButtonLink = styled.a`
    margin-right: 0;
    margin-left: 0;
    margin-top: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 3px solid #171a20;
    border-radius: calc(40px/2);
    block-size: 40px;
    padding: 4px 24px;
    color: #171a20;
    box-shadow: inset 0 0 0 2px transparent;
    font-size: 12px;
    line-height: 1.2;
    position: relative;
    transition: border-color 0.33s ease 0s, background-color 0.33s ease 0s, color 0.33s ease 0s, box-shadow 0.25s ease 0s;
    @media (min-width: 600px) {
        max-width: 100%;
        min-width: 204px;
        width: 100%;
        inline-size: auto;
    }
`

const ButtonText = styled.div`
    width: 100%;
    overfow-wrap: anywhere;
`

const HeaderText = styled.div`
    margin-left: 0;
    margin-right: 0;
    margin-inline-end: auto;
    height: auto;
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    // margin-inline-start: auto;
    text-align: start;
    padding-bottom: 16px;
    padding-top: 16px;
    grid-area: main / main / main / main;
    @media (min-width: 600px) {
        width: fit-content;
        padding-left: 0px;
        padding-inline-start: 0;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
            grid-area: main;
        }
`

const TextWeb = styled.p`
    a {
        box-shadow: 0 1px 0 0 currentColor;
        cursor: pointer;
    }
    @media (max-width: 899px) {
        display: none;
    }
`

const TextMobile = styled(TextWeb)`
    display: none;
    @media (max-width: 899px), (min-width: 600px) and (max-width: 599px) {
        display: block;
    }
`

const MediaContainer = styled.section`
    padding-top: 56px;
    width: 100%;
    max-inline-size: 1440px;
    margin-inline-end: auto;
    margin-inline-start: auto;
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
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        padding-top: calc(32px + 4px);
        padding-inline-end: 24px;
        padding-inline-start: 24px;
        max-width: 100vw;
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
    aspect-ratio: 21/9;
    position: relative;
    z-index: 2;
    border-radius: 20px;
    grid-area: 1 / -1;
    overflow: hidden;
    inline-size: 100%;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        margin-left: calc(24px * -1);
        margin-right: calc(24px * -1);
        aspect-ratio: 16/9;
        margin-inline-end: calc(24px * -1);
        margin-inline-start: calc(24px * -1);
        border-radius: 0;
        width: 100vw;
        }
`

const ImageContainer = styled.div`
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    inset-block: 0;
    inset-inline: 0;
    width: calc(100% + 48px);
    height: 100%;
    overflow: hidden;
    visibility: visible;
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

const Video = styled.video`
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
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        width: 100%;
        max-width: 100vw;
        padding-inline-end: 24px;
        padding-inline-start: 24px;
        }
`

const TextContents = styled.section`
    display: flex;
    width: 100%;
    grid-area: main / main / main / main; 
    flex-flow: column nowrap;
    @media (min-width: 600px) {
        padding-left: 0px;
        padding-inline-start: 0px;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        grid-area: main;
    }
`

const TextInner = styled.section`
    padding-bottom: 72px;
    padding-top: 72px;
    width: 100%;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        padding-bottom: 40px;
        padding-top: 40px;
    }
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
    @media (min-width: 900px) {
        grid-auto-columns: minmax(0px, 1fr);
        grid-auto-flow: column;
    }

    .dotactive {
        // border: 1px;
        color: #000;
        opacity: 1;
    }

    .dotnonAct {
        border: 1px;
    }
`

const TextBox = styled.button`
    box-shadow: inset 0 4px 0 0;
    opacity: 0.4;
    width: 100%;
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
        width: calc(75vw - 30px);
    }
    &:last-child {
        display: ${props => props.lastChild || "inline"};
    }
`

const TextLower = styled.p`
    text-align: left;
    padding-top: 16px;
    padding-bottom: 0px;
    overflow-wrap: anywhere;
    flex-grow: 1;
    color: #a171a20;
    font-weight: 400;
    letter-spacing: 0;
    // padding-block-end: 8px;
    // padding-block-start: 32px;

    @media (min-width: 600px) {
        font-size: 17px;
        line-height: 20px;
    }
`

const TextUpper = styled.div`
    text-align: left;
    padding-block-start: 16px;
    color: #a171a20;
    font-weight: 500;
    letter-spacing: -0.5px;
    // padding-block-end: 8px;
    // padding-block-start: 32px;
    transition: font 0.33s ease 0s, color 0.33s ease 0s, opacity 0.33s ease 0s;

    @media (min-width: 600px) {
        font-size: 20px;
        line-height: 36px;
        
    }
`