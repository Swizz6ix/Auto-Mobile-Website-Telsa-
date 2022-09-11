import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function TopFooter({topImage, topHeader, topSubHeader, btn1, btn2, btn3, btn4, bottomText, left1, subLeft1, leftBrkOne1, leftBrkTwo1, leftBrkThree1, right1, subRight1, rightBrkOne1, rightBrkTwo1, rightBkThree1, left2, subLeft2, leftBrkOne2, leftBrkTwo2, leftBrkThree2, right2, subRight2, rightBrkOne2, rightBrkTwo2, rightBkThree2, left3, subLeft3, leftBrkOne3, leftBrkTwo3, leftBrkThree3, right3, subRight3, rightBrkOne3, rightBrkTwo3, rightBkThree3, left4, subLeft4, leftBrkOne4, leftBrkTwo4, leftBrkThree4, right4, subRight4, rightBrkOne4, rightBrkTwo4, rightBkThree4, left5, subLeft5, leftBrkOne5, leftBrkTwo5, leftBrkThree5, right5, subRight5, rightBrkOne5, rightBrkTwo5, rightBkThree5, left6, subLeft6, leftBrkOne6, leftBrkTwo6, leftBrkThree6, right6, subRight6, rightBrkOne6, rightBrkTwo6, rightBkThree6, bottomBtn, mobileImg}) {
  return (
    <div>
        <Container>
            <InnerContainer>
                <Contents>
                    <ImageContainer>
                        <ImageInner>
                            <picture>
                                <source srcSet={mobileImg} media='(max-width: 599px) and (orientation: portrait)'  />
                                <source srcSet={topImage} media='(max-width: 899px) and (orientation: landscape)'   />
                                <source srcSet={topImage} media='(min-width: 900px) and (orientation: landscape)' />
                                <source srcSet={topImage} media='(min-width: 600px) and (orientation: portrait)' />
                                <Image src= {topImage} alt ='Footer Image' />
                        </picture>
                        </ImageInner>
                    </ImageContainer>
                    <TextContainer>
                        <Header>
                            {topHeader}
                            <SUbHeader>
                                {topSubHeader}
                            </SUbHeader>
                        </Header>
                        <TextContents>
                                <Fade bottom>
                            <ButtonContainer>
                                {btn1 && 
                                <Button1>
                                    {btn1}
                                </Button1>
                                }
                                { btn2 && 
                                <Button>
                                    {btn2}
                                </Button>
                                }
                                { btn3 && 
                                <Button>
                                    {btn3}
                                </Button>
                                }
                                { btn4 && 
                                <Button4>
                                    {btn4}
                                </Button4>
                                }
                            </ButtonContainer>
                                </Fade>
                            <TableContainer>
                                        <Fade bottom>
                                <TableInner>
                                    <TableContents>
                                        <TableLeft>
                                            <TableHead>
                                                <TableList>
                                                    <strong>{left1}</strong>
                                                    <div className='subList'>{subLeft1}</div>
                                                </TableList>
                                                <TableList>
                                                    <strong>{left2}</strong>
                                                    <div className='subList'>
                                                        {subLeft2}
                                                        <br />
                                                        {leftBrkOne2}
                                                    </div>
                                                </TableList>
                                                <TableList>
                                                    <strong>
                                                        {left3}
                                                    </strong>
                                                    <div className='subList'>
                                                        {subLeft3}
                                                        <br></br>       <em>{leftBrkOne3}</em>
                                                    </div>
                                                </TableList>
                                                {left4 && 
                                                <TableList>
                                                    <strong>
                                                        {left4}
                                                    </strong>
                                                    <div className='subList'>
                                                        {subLeft4}
                                                        {/* <br></br> */}
                                                        <p>{leftBrkOne4}</p>
                                                        {/* <br /> */}
                                                        <p>{leftBrkTwo4}</p>
                                                        {/* <br /> */}
                                                        <p>{leftBrkThree4}</p>
                                                    </div>
                                                </TableList>
                                                }
                                                {left5 && 
                                                <TableList>
                                                    <strong>
                                                        {left5}
                                                    </strong>
                                                    <div className='subList'>
                                                        {subLeft5}
                                                    </div>
                                                </TableList>
                                                }
                                                {left6 && 
                                                <TableList>
                                                    <strong>
                                                        {left6}
                                                    </strong>
                                                    <div className='subList'>
                                                        {subLeft6}
                                                    </div>
                                                </TableList>
                                                }
                                            </TableHead>
                                        </TableLeft>
                                        <TableRight>
                                            <TableHead>
                                                <TableList>
                                                    <strong>{right1}</strong>
                                                    <div className='subList'>
                                                        {subRight1}
                                                        <br></br>
                                                        {rightBrkOne1}
                                                        <br></br>
                                                        {rightBrkTwo1}
                                                    </div>
                                                </TableList>
                                                <TableList>
                                                    <strong>
                                                        {right2}
                                                    </strong>
                                                    <div className='subList'>
                                                        <a>
                                                            {subRight2}
                                                        </a>
                                                        <br></br>
                                                        {rightBrkOne2}
                                                    </div>
                                                </TableList>
                                                <TableList>
                                                    <strong>
                                                        {right3}
                                                    </strong>
                                                    <div className='subList'>
                                                        {subRight3}
                                                        <br />
                                                        {rightBrkOne3}
                                                    </div>
                                                </TableList>
                                                {right4 && 
                                                <TableList>
                                                    <strong>
                                                        {right4}
                                                    </strong>
                                                    <div className='subList'>
                                                        {subRight4}
                                                    </div>
                                                </TableList>
                                                }
                                                {right5 && 
                                                <TableList>
                                                    <strong>
                                                        {right5}
                                                    </strong>
                                                    <div className='subList'>
                                                        {subRight5}
                                                    </div>
                                                </TableList>
                                                }
                                                {right6 && 
                                                <TableList>
                                                    <strong>
                                                        {right6}
                                                    </strong>
                                                    <div className='subList'>
                                                        {subRight6}
                                                        <br />
                                                        {rightBrkOne6}
                                                    </div>
                                                </TableList>
                                                }
                                            </TableHead>
                                        </TableRight>
                                    </TableContents>
                                </TableInner>
                                </Fade>
                            </TableContainer>
                        </TextContents>
                        <Fade bottom>
                        <DownText>
                            {bottomBtn && 
                            <Button>
                                {bottomBtn}
                            </Button>
                            } 
                            <em>
                                {bottomText}
                            </em>
                        </DownText>
                        </Fade>
                    </TextContainer>
                </Contents>
            </InnerContainer>
        </Container>
    </div>
  )
}

export default TopFooter

const Container = styled.section`
    min-height: 100vh;
    padding-top: 48px;
    padding-bottom: 4px;
    overflow: hidden;
    // height: 100vh;
    width: 100vw;
    scroll-snap-align: start;
    background-color: #222;
    background: #000;
    color: #e2e3e3;
    @media (min-width: 900px) {
        // block-size: 100vh;
        inline-size: 100vw;
    }
    @media (min-width: 600px) {
        display: flex;
        overflow-y: hidden;
    }
`

const InnerContainer = styled.div`
    margin-inline-end: auto;
    margin-inline-start: auto;
    max-inline-size: 1440px;
    width: 100%;
    position: relative;
    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 24px;
        margin: auto;
        transition: padding 0.15s ease-in-out 0s;
        margin-bottom: 0px;
        margin-top: 0px;
        float: right;
        min-inline-size: calc(50vw - 24px);
    }
    @media (min-width: 900px) {
        padding-inline-end: 40px;
        padding-inline-start: 40px;
        grid-template-areas: ". main main main main main main main main main main .";
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        max-width: 100vw;
    }
    @media (max-width: 899px) {
        padding-inline-end: 24px;
        padding-inline-start: 24px;
        transition: padding .15s ease-in-out;
    }
` 

const Contents = styled.div`
    grid-area: main / main / main / main;
    @media (min-width: 600px) {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        flex-flow: row nowrap;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
    }

    @media (min-width: 900px) {
        grid-column: 2 / 12;
    }
    @media (max-width: 899px) {
        grid-area: main;
        &:first-child:last-child {
            grid-column: 1/13;
        }
    }
`

const ImageContainer = styled.div`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
    float: right;
    height: auto;
    @media (min-width: 900px) {
        inset-block-start: 50%;
        inset-inline-start: calc(110% - 50vw);
        width: calc(45% - 13.2px);
        flex-grow: 0;
    }
    @media (max-width: 599px) {
        padding-bottom: 24px;
    }
`

const ImageInner = styled.div`
    height: auto;
    position: relative;
    width: 100%;
    overflow: visible;
`
const Image = styled.img`
    top: 50%;
    bottom: 0;
    left: calc(110% - 50vw);
    margin-right: 0;
    margin-left: 0;
    display: block;
    float: right;
    height: auto;
    inset-inline-start: calc(110% - 50vw);
    margin-inline-end: 0;
    margin-inline-start: 0;
    margin-top: 0;
    max-width: none;
    min-width: calc(50vw - 24px);
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    position: absolute;
    transform: translateY(-50%);
    visibility: visible;
    width: 100%;
    border-radius: 0;
    @media (max-width: 899px) {
        float: none;
        position: static;
        transform: none;
    }
`

const TextContainer = styled.section`
    justify-content: center;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    @media (min-width: 900px) {
        flex-grow: 0;
        width: calc(45% - 13.2px);
    }
`

const Header = styled.span`
    padding-bottom: 24px;
    padding-top: 0;
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.5px;
    // padding-block-start: 32px;
    // padding-block-end: 8px;
    transform: translateZ(0);
    transition-delay: .6s;
    transition-duration: 0.5s;
    transition: all 0 cubic-bezier(0.45, 0.03, 0.515, 0.955);
    @media (min-width: 600px) {
        font-size: 28px;
        line-height: 32px;
    }
    @media (max-width: 899px) {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -0.6px;
    }
`

const TextContents = styled.section``

const DownText = styled.div`
    color: #fff;
    em {
        color: #f4f4f4;
    }
`

const ButtonContainer = styled.div`
    display: grid;
    grid-gap: 4px;
    grid-auto: flow;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    height: auto;
    block-size: auto;
    overflow: auto;
    align-items: center;
`

const Button = styled.button`
    height: 32px;
    background-color: transparent;
    border: 3px solid #222;
    border-radius: calc(40px/2);
    box-shadow: inset 0 0 0 transparent, 0 0 0 0 transparent;
    color: #d0d1d2;
    cursor: pointer;
    display: inline-flex;
    white-space: nowrap;
    font-size: 12px;
    justify-content: center;
    line-height: 1.2;
    outline-offset: -2px;
    padding: 4px 24px;
    position: relative;
    scroll-snap-align: center;
    transition: background-color .3s ease, border-color .3s ease, box-shadow .3s ease, color .3s ease; 
    align-items: center;
    block-size: calc(auto - 8px);
    &:hover {
        border-color: #fff;
        color: #fff;
    }
`
const Button1 = styled(Button)`
    border-color: #fff;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`
const Button4 = styled(Button)`
    background-color: #fff;
    color: #000;
    &:hover {
        background-color: transparent;
        color: #d0d1d2;
    }
`

const SUbHeader = styled.span`
    padding-left: 8px;
    color: #fff;
`

const TableContainer = styled.div`
    inline-size: 100%;
`

const TableInner = styled.div`
    padding-top: 0px;
    padding-bottom: 24px;
    outline: none;
    display: block;
    visibility: inherit;
    transition: visibility 0.5s ease 0s;
`

const TableContents = styled.div`
    display: flex;
    align-items: flex-start;
`

const TableRight = styled.div`
    width: 50%;
    margin: 0px;
`
const TableLeft = styled(TableRight)`
    padding-right: 24px;
    padding-inline-end: 24px;
`

const TableHead = styled.ul`
    line-height: 20px;
    padding-inline: 0;
    timeline-color: #e2e3e3;
    separator-color: #8e8e8e;
    margin-block: 24px;
    color: #fff;
`

const TableList = styled.li`
    padding-inline-end: 0;
    padding-inline-start: 0;
    position: relative;
    letter-spacing: 0.5px;
    color: #fff;
    margin-block-end: 20px;
    &::before {
        content: '';
        block-size: 1px;
        display: block;
        background-color: #222;
        max-inline-size: 32px;
        margin-block-end: 10px;
    }

    .subList {
        overflow-wrap: anywhere;
        color: #fff;
    }
    strong, a, p, em {
        color: #fff;
    }
`