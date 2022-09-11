import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function OverFlow() {
    const textList = [
        {
            id: 1,
            header: "Rigid Structure",
            paragraph: "A material mix of aluminum and steel help to achieve the best structural rigidity, and increased occupant safety."
        },
        {
            id: 2,
            header: "Impact protection",
            paragraph: "Combined with impact-absorbing rails and center pillar reinforcements, the strength and support of the rigid battery pack provides protection from every side.",
            height: "488px",
            top: "-310px",
            round:  '-310px',
            delay:  ".2s"
        },
        {
            id: 3,
            header: "Very Low Rollover Risk",
            paragraph: "The position and weight of the floor-mounted battery pack provides a very low center of gravity—allowing for a very low rollover risk."
        }
    ]
  return (
    <TopSection>
        <div className='container__div'>
            <div>
                <TextItems>
                    <Fade bottom>
                    <section className='textContainer'>
                        <h2>

                            Safety-First Design
                        </h2>
                    </section>
                    <section className='textContainer'>
                        <p>
                            Model 3 is built from the ground up as an electric vehicle—with ultra high-strength steel and a low, solid center of gravity.
                        </p>
                    </section>
                    </Fade>
                </TextItems>
            </div>
        </div>
        <div>
            <ImgContainer>
                <div>
                    <Picture>
                        <Source />
                        <Source />
                        <Source />
                        <Img />
                    </Picture>
                </div>
            </ImgContainer>
            <ListItems></ListItems>
        </div>
            <Fade top>
        <UL>
            {textList.map((list) => (
            <LI key={list.id} height={list.height} top={list.top} round={list.round} delay={list.delay} >
                <Span>
                    {list.id}
                </Span>
                <Span>
                    {list.header}
                </Span>
                <Text>
                    {list.paragraph}
                </Text>
            </LI>

            ))}
        </UL>
            </Fade>
    </TopSection>
  )
}

export default OverFlow

const TopSection = styled.div`
    margin-left: -32;
    margin-right: -32;
    width: calc(100% + 64px)
    margin-inline-end: -32px;
    margin-inline-start: -32px;
    position: relative;
    padding-bottom: 48px;
    padding-top: 0;

    .container__div {
        min-height: 110px;
        & + & {
            position: relative;
        }
    }

    .container__div > div {
        width: 840px;
        margin: 0 auto;
        dispaly: flex;
        list-style: none;
        padding: 0;
        @media (min-width: 600px) {
            flex-flow: row wrap;
        }
    }
`

const TextItems = styled.div`
    padding: 0 50px 0 0;
    padding-inline-end: 50px;
    padding-inline-start: 0;
    flex: none;
    transition: width .25s ease-in-out;
    @media (min-width: 600px) {
            inline-size: 50%;
        }

    .textContainer {
        opacity: 1;
        transform: translateZ(0)
        transiton: transform 1500ms cubic-bezier(0, 165, 0.84, 0.44, 1);
        z-index: auto;
    }

    .textContainer > p {
        margin-right: 10px;
        margin-inline-end: 10px;
        font-size: 14px;
        line-height: 20px;
        padding-bottom: 14px;
    }
`

const UL = styled.ul`
    padding: 0 0 0 20px;
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    width: 100%;
    list-style: none;
    margin: -10px auto 10px;
    max-width: 840px;
    overflow: visible;
    padding-inline-end: 0;
    padding-inline-start: 20px;
`
const LI = styled.li`
    margin-left: 0;
    width: 33.33%;
    margin-inline-start: 0;
    position: relative;
    display: list-item;

    &::before {
        left: -20px;
        content: "";
        display: block;
        height: ${props => props.height || '422px'};
        width: 3px;
        inset-inline-start: -20px;
        position: absolute;
        top: ${props => props.top || '-245px'};
        transform-origin: 50% 0;
        background: #000;
        transittion-delay: ${props => props.delay || "0"}
    }

    &::after {
        transform: scaleY(1);
        left: -23px;
        background-color: #fff;
        height: 5px;
        border: 2px solid #000;
        border-radius: 8px;
        box-sizing: initial;
        content: '';
        display: block;
        width: 5px;
        inset-inline-start: -23px;
        position: absolute;
        top: ${props => props.round || "-245px"};
        transittion-delay: ${props => props.delay || "0"}
    }
`
const Span = styled.span`
    background-color: rgba(0, 0, 0, .7);
    display: none;
    padding-bottom: 0;
    padding-top: 0;
    font-size: 14px;
    line-height: 20px;

    & + &{
        opacity: 1;
        transform: translateY(0);
        transition-delay: .7s;
        width: 90%;
        margin: 0;
        transition: all 1s cubic-bezier(.23, 1, .32, 1)
        padding: 5px 0;
        padding-block-start: 14px;
        font-weight: 700;
        display: block;
        background-color: transparent;
    }
`
const Text = styled.p`
    opacity: 1;
    transform: translateY(0);
    transition-delay: .6s;
    color: #393c41;
    width: 90%;
    margin: 0;
    transition: all 1s cubic-bezier(.23, 1, 32, 1);
    padding-bottom: 14px;
    display: block;
    font-size: 14px;
`

const ImgContainer = styled.div`
    width: 100%;
    margin: 60px 0 0;
    position: relative;
    height: 28vw;
    @media (min-width: 840px) {
        height: 423px;
    }

    & + & {
        height: 100%;
        overflow: visible;
        position: relative;
        width: 100%;
    }
`

const Picture = styled.picture`
    display: flex;
    top: 0;
    bottom: 0;
    inset-block: 0;
    left: 0;
    inset-inline: 0;
    position: absolute;
    height: 100%;
    opacity: 1;
    transform: translateZ(0);
    transition: transform 1500ms cubic-bezier(0, 165, 0.84, 0.44, 1), opacity 1500ms, -webkit-transform 1500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: auto;
`
const Source = styled.source`
    @media (max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)
`

const Img = styled.img`
height: 100%;
width: auto;
margin: 0 auto;
max-width: 100%;
object-fit: cover;
left : 0;
border-radius: 0;
bottom: 0;
display: block;
float: none;
inset-inline-start: 0;
margin-inline-end: 0;
margin-inline-start: 0;
min-width: 0;
object-position: center;
opacity: 1;
position: static;
top: 0;
transform: none;
visibility: visible;
`
const ListItems = styled.section`
    
`
