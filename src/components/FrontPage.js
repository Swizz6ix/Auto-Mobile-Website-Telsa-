import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function FrontPage({fullnth, topImg, topHeader, subTopHeader, link, mobileImg, btn1, btn}) {
  return (
    <div>
        <Wrap>
        <ImageContainer>
            <picture>
            <source srcset={mobileImg} media='(max-width: 599px) and (orientation: portrait)'  />
            <source media='(max-width: 899px) and (orientation: landscape)'  srcset={topImg} />
            <source media='(min-width: 900px) and (orientation: landscape)'  srcset={topImg} />
            <source media='(min-width: 600px) and (orientation: portrait)'  srcset={topImg} />
            <Cover alt='Cover Picture' src={topImg} />
            </picture>
        </ImageContainer>
        <Writeups>
            <Fade bottom>
            <TopWriteUps>
                {topHeader}
            </TopWriteUps>
            </Fade>
            <Fade bottom>
            <SubTop>
                {subTopHeader} <Link>{link}</Link>
            </SubTop>
            </Fade>
            <BottomWriteUps>
            <Fade bottom>
                <Contents fullnth={fullnth}>
                    <ButtonBox>
                            {btn1 && 
                                <Button1>
                                    <ButtonText1>
                                        {btn1}
                                    </ButtonText1>
                                </Button1>
                            }
                            {btn && 
                                <Button>
                                    <ButtonText>
                                    {btn}
                                    </ButtonText>
                                </Button>
                            }
                    </ButtonBox>
                </Contents>
                <Empty></Empty>
                <DropDown>
                    <Arrow alt='' src={'/images/down-arrow.svg'}  />
                </DropDown>
            </Fade>
            </BottomWriteUps>
        </Writeups>
    </Wrap>
    </div>
  )
}

export default FrontPage

const Wrap = styled.div`
    display: grid;
    scroll-snap-align: start;
    z-index: 1;
    block-size: 100vh;
    height: 100vh;
    width: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    // background-pcolor: #222;
    // background: #000;
    @media (min-width: 600px) {
        // inline-size: calc(8px * 33);
        // min-inline-size: calc(8px * 33);
    }
    &::after {
    // content: "";
    // height: 20%;
    // opacity: 1;
    // position: absolute;
    // width: 100%;
    // top: auto;
    // bottom: 0px;
    // background: linear-gradient(to top, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 100%);

}
    
`

const ImageContainer = styled.div`
    grid-area: 1 / -1 / auto / auto ;
    z-index: 2;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: visible;
    &::after {
    content: "";
    height: 20%;
    opacity: 1;
    position: absolute;
    width: 100%;
    top: auto;
    bottom: 0px;
    background: linear-gradient(to top, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 100%);
    @media (max-width: 599px) {
        grid-area: 1/-1;
    }
`

const Cover = styled.img`
    object-postion: center;
    left: 0;
    bottom: 0;
    display: block;
    height: 100vh;
    width: 100%;
    inset=inline-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    margin-left: 0; 
    margin-right: 0;
    max-width: none; 
    min-width: 0;
    object-fit: cover;
`

const Writeups = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-flow: column nowrap;
    width: 100%;
    margin: 0px auto;
    z-index: 3;
    grid-area: 1 / -1 / auto / auto;
    @media (max-width: 599px) {
        grid-area: 1/-1;
    }
`

const TopWriteUps = styled.h1`
    opacity: 1;
    transform: translateZ(0);
    z-index: auto;
    margin-top: 16vh;
    color: "#171a20";
    width: 100%;
    padding: 0 24px;
    font-weight: 500;
    padding-block-end: 8px;
    padding-block-start: 32px;
    transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    @media (min-width: 600px) {
        letter-spacing: -0.6px;
        font-size: 40px;
        line-height: 48px;
    }
    @media (max-width: 599px) {
        font-size: 34px;
        margin-top: 18vh;
        letter-spacing: -0.7px;
        line-height: 36px;
    }
`
const SubTop = styled.p`
    padding: 6px 24px 14px 24px;
    padding-inline-end: 24px;
    padding-inline-start: 24px;
    width: 100%;
    opacity: 1;
    transform: translateY(0);
    z-index: auto;
    font-size: 15px;
    line-height: 20px;
    color: "#171a20";
    transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 500ms cubic-bezier(0.165, 0.84, 0.44, 1);l
`
const Link = styled.a`
    box-shadow:  0 1px 0 0 currentColor;
    cursor: pointer;
`

const BottomWriteUps = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 8px;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    width: 100%;
`

const Contents = styled.section`
    display: grid;
    justify-items: center;
    grid-gap: 24px;
    grid-template-columns: ${props => props.fullnth};
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        grid-gap: 24px 6px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        grid-template-columns: calc(8px * 20) calc(8px * 20) calc(8px * 20);
        padding-left: 24px;
        padding-right: 24px;
        padding-inline-end: 24px;
        padding-inline-start: 24px;
    }
    @media (max-width: 599px) {
        grid-template-columns: 105px 105px 105px;
    }
`

const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    max-width: calc(8px *20);
    transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.15s;
    @media (min-width: 600px) {
        opacity: 1;
        transform: translateZ(0px);
    }
    @media (max-width: 599px) {
        max-width: 105px;
    }
`
const Container0 = styled(Container)`
    display: ${props => props.box3}
`
const Container1 = styled(Container)`
    display: ${props => props.speedO || "flex"}
`

const Container2 = styled(Container)`
    display: none;
    @media(min-width: 900px) {
        display: ${props => props.box4 || "flex"}
    }
`

const TopText = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    line-height: 1em;
    color: #fff;
    min-height: calc(24px + 4px);
    flex-flow: row nowrap;
    padding: 0;
    font-size: 28px;
    letter-spacing: -0.5px;
    font-weight: 500;
    // padding-block-end: 8px;
    // padding-block-start: 32px;
    transition: font 0.33s ease 0s, color 0.33s ease 0s, opacity 0.33s ease 0s;
    @media (max-width: 599px) {
        color: #f4f4f4;
        font-size: 20px;
        min-height: 24px;
    }
`

const Speedometer = styled(TopText)`
    display: flex;
    align-items: baseline;
    color: #fff;
`

const ButtonBox = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    @media (min-width: 900px) {
        margin-inline-start: 8px;
    }

    @media (min-width: 600px) {
        opacity: 1;
        transform: translateZ(0px);
        transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.15s;
    }
    @media (max-width: 599px) {

    }
    @media (min-width: 600px) and (max-width: 899px) {
        max-width: 328px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        min-inline-size: 100%;
        grid-column: 1/4;
        grid-row: 2/3;
    }
`
const ButtonText = styled.span`
    width: 100%;
    overflow-wrap: anywhere;
    color: #171a20;
    font-weight: 500;
    font-size: 15px;
    @media (max-width: 599px) {
        overflow-wrap: normal;
    }
    &:hover {
        color: #fff;
    }
`
const ButtonText1 = styled(ButtonText)`
    color: #fff;
`

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    block-size: 40px;
    width: 100%;
    margin-left: 8px;
    margin-right: 0px;
    padding: 4px;
    background-color: #f4f4f4;
    border-radius: calc(40px/2);
    border: 3px solid #f4f4f4;
    border-color: #f4f4f4;
    color: #fff;
    text-align: center;
    backdrop-filter: none;
    box-shadow: inset 0 0 0 2px transparent;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    position: relative;
    margin-bottom: 0;
    margin-top: 0;
    margin-inline-end: 0;
    margin-inline-start: 8px;
    transition: border-color 0.33s ease 0s, background-color  0.33s ease 0s, box-shadow  0.25s ease 0s;
    @media (min-width: 600px) {
        max-width: none;
        min-width: 100%;
        width: auto;
        // inline-size: auto;
    }
    @media (max-width: 599px) {
        inline-size: 300px;
    }
    &:hover { 
        background-color: #171a20;
        ${ButtonText} {
            color: #fff;
        
    }
    }
    } 
`
const Button1 = styled(Button)`
    background-color: #171a20;
    &:hover { 
        background-color: #fff;
        ${ButtonText1} {
            color: #171a20;
        }
    }
`


const Text = styled.p`
    color: #fff;
    padding-bottom: 0px;
    padding-top: 8px;
    font-size: 12px;
    line-height: 18px;
    padding-block-start: 12px;
    @media (max-width: 599px) {
        font-size: 10px;
        color: f4f4f4;
        padding-top: 5px;
    }
`

const Units = styled.span`
    color: #fff;
    padding-left: 4px;
    line-height: 1em;
    padding-bottom: 0px;
    padding-top: 0px;
    padding-inline-start: 4px;
    font-weight: 500;
    letter-spacing: -0.6px;
    // padding-block-end: 8px;
    // padding-block-start: 32px;
    transition: font 0.33s ease 0s, color 0.33s ease 0s, opacity 0.33s ease 0s;
    @media (max-width: 599px) {
        font-size: 20px;
        color: f4f4f4;
        letter-spacing: -0.5px;
        padding-left: 2px;
        padding-inline-start: 2px;
    }

`
const Empty = styled.div`
    padding-right: 24px;
    padding-left: 24px;
    padding-inline-end: 24px;
    padding-inline-start: 24px;
    margin-top: 32px;
    width: 100%;
    opacity: 1;
    transform: translateZ(0px);
    transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: auto;
    @media (min-width: 900px) {
        min-height: 18px;
    }
`

const DropDown = styled.div`
    // animation-delay: 1s;
    animation: animateDown infinite 2s;
    block-size: 24px;
    inline-size: 24px;
    min-block-size: 24px;
    max-inline-size: 100%;
    min-inline-size: 24px;
    // text-indent: -9999px;
    background: transparent;
    transition: color 0.33s ease 0s;
    cursor: pointer;
    color: #e2e3e3;
    border-color: #222;
`

const Arrow = styled.img`
    animation: animateDown infinite 2s;
`
