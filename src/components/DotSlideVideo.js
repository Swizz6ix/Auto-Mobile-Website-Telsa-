import React, {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function DotSlideVideo({slice1,slice2, slice3, slice4, slice5}) {
    const slides = [
        {
            id: 1,
            textHeader: "Cinematic Experience",
            textBody: "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
            className: "keen-slider__slide number-slider1",
            video: [slice1]
        },
        {
            id: 2,
            textHeader: "Yoke Steering",
            textBody: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
            className: "keen-slider__slide number-slider2",
            video: [slice2]
        },
        {
            id: 3,
            textHeader: "Perfect Environment",
            textBody: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
            className: "keen-slider__slide number-slider3",
            video: [slice3]
        },
        {
            id: 4,
            textHeader: "Redesigned Second Row",
            textBody: "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.",
            className: "keen-slider__slide number-slider4",
            video: [slice4]
        },
        {
            id: 5,
            textHeader: "Console Grade Gaming",
            textBody: "Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.",
            className: "keen-slider__slide number-slider5",
            video: [slice5]
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
            <Empty>
                <EmptyText>&nbsp;</EmptyText>
                <EmptyText>&nbsp;</EmptyText>
            </Empty>
            <ImageContainer>
                <ImageSlider>
                    <SliderContainteer>
                        <OuterContianer>
                            <InnerContainer>
                                <ContentLayout>
                                    <Contents>
                                        <ImageHolder className='keen-slider' ref={sliderRef}>
                                            {slides.map((slide) => (
                                                <Video key={slide.id} className={`${slide.className}`} muted autoPlay loop>
                                                    <source src={slide.video} alt='Product Video' />
                                                </Video>
                                            ))}
                                        </ImageHolder>
                                    </Contents>
                                </ContentLayout>
                            </InnerContainer>
                        </OuterContianer>
                        <SlideButton>
                            <OutterArea>
                                <InnerArea>
                                    {loaded && instanceRef.current && (
                                        <Dot className='dots'>
                                            {[
                                                ...Array(instanceRef.current.track.details.slides.length).keys(),
                                            ].map((idx) => {
                                                return (
                                                    <Button
                                                        key={idx}
                                                        onClick={() => {
                                                            instanceRef.current?.moveToIdx(idx)
                                                        }}
                                                        className={"dot" + (currentSlide === idx? "active" : "")}
                                                    ></Button>
                                                )
                                            })
                                            }
                                        </Dot>
                                    )}
                                    <TextArea className='keen-slider' ref={sliderRef}>
                                        {/* <Fade bottom> */}
                                            {slides.map((slide) => (
                                                <TextContent key={slide.id} className={`${slide.className}`}>
                                                    <Header>
                                                        {slide.textHeader}
                                                    </Header>
                                                    <SubHeader>
                                                        {slide.textBody}
                                                    </SubHeader>
                                                </TextContent>
                                            ))}
                                        {/* </Fade> */}
                                    </TextArea>
                                </InnerArea>
                            </OutterArea>
                        </SlideButton>
                    </SliderContainteer>
                </ImageSlider>
            </ImageContainer>
        </Container>
    </Wrap>
  )
}

export default DotSlideVideo

const Wrap =  styled.section`
max-inline-size: 100%;
margin-inline-start: auto;
margin-inline-end: auto;
inline-size: 100%;
display: block;
max-width: 100%;
padding-inline-end: 0px;
padding-inline-start: 0px;
padding-right: 0px;
padding-left: 0px;
`
const ImageContainer = styled.section`
    background: #000;
`

const Container = styled.div`
    disp;ay: flex;
    flex-flow: row wrap;
    flex: 1 1 0%;
`

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

const ImageSlider = styled.div`
    display: grid;
    max-width: 100vw;
    width: 100%;
    z-index: 1;
    // overflow: hidden;
    aspect-ratio: 21/9;
    padding-block-end: 16px;
    padding-block-start: 16px;
`

const SliderContainteer = styled.section`
    aspect-ratio: 21/9;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    z-index: 3;
    flex-flow: column nowrap;
    grid-area: 1 / -1 / auto / auto;
    background: transparent;

    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        aspect-ratio: 16/9;
        width: 100vw;
    }
`

const OuterContianer = styled.section`
    Padding-top: 56px;
    width: 100%;
    max-inline-size: 1440px;
    margin-inline-end: auto;
    margin-inline-start: auto;
    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: auto;
        transition: padding 0.15s ease-in-out 0s;
        margin-bottom: 0px;
        margin-top: 0px;
    }
    @media (min-width: 900px) {
        padding-inline-end: 40px;
        padding-inline-start: 40px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        width: 100vw;
    }
`

const InnerContainer = styled.section`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    grid-column: 1 /13;
    @media (min-width: 600px) {
        padding-left: 0px;
        padding-right: 0px;
        padding-inline-start: 0px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        padding-inline-end: 24px;
        padding-inline-start: 24px;
    }
`

const ContentLayout = styled.section`
    aspect-ratio: 21/9;
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

const Contents = styled.section`
    bottom: 0px;
    display: block;
    // opacity: 0;
    left: 0px;
    right: 0px;
    top: 0;
    bottom: 0;
    inset-block: 0px;
    inset-inline: 0px;
    height: 100%;
    overflow: hidden;
    transition: opacity 1.5s ease 0s;
    position: absolute;
    visibility: visible;
    inset-block: 0px;
    inset-inline: 0px;
`

const ImageHolder = styled.div`
    height: 100%;
    position: absolute;
    top: 50%;
    width: 100%;
    overflow: visible;
    transform: translateY(-50%) scale(1);
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        top: 50%;
        transform: translateY(-50%) scale(1);
        block-size: 100%;
        position: absolute;
    }
`


const Video = styled.video`
    height: 100%;
    object-position: center center;
    object-fit: cover;
    margin-left: 0;
    margin-right: 0;
    bottom: 0;
    display: block;
    border-radius: 0px;
    width: 100%;
    top: 0;
    position: static;
    max-width: none;
    min-width: 0;
`

const SlideButton = styled.section`
    width: 100%;
    max-inline-size: 1440px;
    margin-inline-end: auto;    
    margin-inline-start: auto;  
    padding-inline-end: 24px;  
    padding-inline-start: 24px;  
    @media (min-width: 600px) {
        margin-bottom: 0px;
        margin-top: 0px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: auto;
        transition: padding 0.15s ease-in-out 0s;
    }

    @media (min-width: 900px) {
        grid-template-areas: ". . . main main main main main main . . .";
        padding-inline-end: 40px;
        padding-inline-start: 40px;
    }

    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        aspect-ratio: 16/9;
        width: 100vw;
    }
`
const OutterArea = styled.div`
    display: flex;
    width: 100%;
    aspect-ratio: 21/9;
    flex-flow: column nowrap;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    grid-area: main / main / main / main;
    @media (min-width: 600px) {
        padding-inline-start: 0px;
        padding-left: 0px;
    }
`

const InnerArea = styled.div`
    padding-bottom: 72px;
    padding-top: 72px;
    width: 100%;
`

const Dot = styled.div`
    dispaly: flex;
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fit, 12px);
    gap: 8px;
    height: 12px;
    // background: #fff;
    align-items: center;
    block-size: 12px;
    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
    position: relative;

    .dotactive {
        border: 1px;
    }
`

const Button = styled.button`
    margin: 0;
    overflow: visible;
    padding: 4px;
    text-indent: -10000px;
    height: calc(8px + 4px);
    align-items: center;
    border-radius: calc(40pc/2);
    line-height: 1.2;
    display: inline-flex;
`

const TextArea = styled.div`
    block-size: 114px;
`

const TextContent = styled.div`
    height: 114px;
    color: #fff;
    overflow: hidden;
`

const Header = styled.span`
    display: block;
    margin: 0;
    padding-top: 16px;
    font-size: 17px;
    line-height: 20px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0px;
    text-transform: none;
    transition: front .33s ease, color .33s ease, opacity .33s ease;
`

const SubHeader = styled.p`
    padding-top: 16px;
    padding-bottom: 14px;
    line-height: 20px;
    color: #fff;
`