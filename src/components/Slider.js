import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Slider({Image1, Image2, Image3, Image4, mobileImg4, mobileImg3, mobileImg2,mobileImg1, textHeader1, textHeader2, textHeader3, textHeader4, textBody1, textBody2, textBody3, textBody4}) {
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
                    }, 2000)
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
                                            {Image1 && 
                                                <picture>
                                                    <source srcSet={mobileImg1} media='(max-width: 599px) and (orientation: portrait)'  />
                                                    <source srcSet={Image1} media='(max-width: 899px) and (orientation: landscape)'   />
                                                    <source srcSet={Image1} media='(min-width: 900px) and (orientation: landscape)' />
                                                    <source srcSet={Image1} media='(min-width: 600px) and (orientation: portrait)' />
                                                        <Image className='keen-slider__slide number-slider1' src={Image1} alt='' />
                                                </picture>
                                            }
                                            {Image2 && 
                                                <picture>
                                                    <source srcSet={mobileImg2} media='(max-width: 599px) and (orientation: portrait)'  />
                                                    <source srcSet={Image2} media='(max-width: 899px) and (orientation: landscape)'   />
                                                    <source srcSet={Image2} media='(min-width: 900px) and (orientation: landscape)' />
                                                    <source srcSet={Image2} media='(min-width: 600px) and (orientation: portrait)' />
                                                        <Image className='keen-slider__slide number-slider2' src={Image2} alt='' />
                                                </picture>
                                            }
                                            {Image3 && 
                                                <picture>
                                                    <source srcSet={mobileImg3} media='(max-width: 599px) and (orientation: portrait)'  />
                                                    <source srcSet={Image3} media='(max-width: 899px) and (orientation: landscape)'   />
                                                    <source srcSet={Image3} media='(min-width: 900px) and (orientation: landscape)' />
                                                    <source srcSet={Image3} media='(min-width: 600px) and (orientation: portrait)' />
                                                        <Image className='keen-slider__slide number-slider3' src={Image3} alt='' />
                                                </picture>
                                            }
                                            {Image4 && 
                                                <picture>
                                                    <source srcSet={mobileImg4} media='(max-width: 599px) and (orientation: portrait)'  />
                                                    <source srcSet={Image4} media='(max-width: 899px) and (orientation: landscape)'   />
                                                    <source srcSet={Image4} media='(min-width: 900px) and (orientation: landscape)' />
                                                    <source srcSet={Image4} media='(min-width: 600px) and (orientation: portrait)' />
                                                        <Image className='keen-slider__slide number-slider4' src={Image4} alt='' />
                                                </picture>
                                            }
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
                                        {textBody1 &&
                                            <TextContent className='keen-slider__slide number-slider1'>
                                                <Header>
                                                    {textHeader1}
                                                </Header>
                                                <SubHeader>
                                                    {textBody1}
                                                </SubHeader>
                                            </TextContent>
                                        }
                                        {textBody2 && 
                                            <TextContent className='keen-slider__slide number-slider2'>
                                                <Header>
                                                    {textHeader2}
                                                </Header>
                                                <SubHeader>
                                                    {textBody2}
                                                </SubHeader>
                                            </TextContent>
                                        }
                                        {textHeader3 &&
                                            <TextContent className='keen-slider__slide number-slider3'>
                                                <Header>
                                                    {textHeader3}
                                                </Header>
                                                <SubHeader>
                                                    {textBody3}
                                                </SubHeader>
                                            </TextContent>
                                        }
                                        {textHeader4 && 
                                            <TextContent className='keen-slider__slide number-slider4'>
                                                <Header>
                                                    {textHeader4}
                                                </Header>
                                                <SubHeader>
                                                    {textBody4}
                                                </SubHeader>
                                            </TextContent>
                                        }
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

export default Slider

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
    position: relative;

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
    opacity: 1;
    left: 0px;
    right: 0px;
    top: 0;
    bottom: 0;
    inset-block: 0px;
    inset-inline: 0px;
    height: 100%;
    overflow: hidden;
    transition: opacity 1.5s ease 0s;
`

const ImageHolder = styled.div.attrs(({ref}) => ({
    ref: ref,
}))`
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


const Image = styled.img`
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