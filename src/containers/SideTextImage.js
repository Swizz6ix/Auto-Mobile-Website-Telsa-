import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import ImageBtn from '../components/ImageBtn';
import ButtonAndText from '../components/ButtonAndText';

function SideTextImage({SidePic, boxHeader1, subHeader1, textBox1, boxHeader2, textBox2, subHeader2, boxHeader3, subHeader3, textBox3, liteHeader, boldHeader, text1, link, strong1, strong2, text2, text3, sideTextM, text0, ordBtn, lrnBtn, mobileImg, mText1, mText2, mText3}) {
  return (
    <Wrap>
        <Container>
            <SideContainer>
                <TextContainer>
                    <Fade bottom>
                        <HeaderContents>
                            <Header>
                                {liteHeader}
                            </Header>
                            <HeaderBold>
                                {boldHeader}
                            </HeaderBold>
                        </HeaderContents>
                        </Fade>
                    <Fade bottom>
                        <BodyContents>
                            <Text>
                                {text1} <a>{link}</a>{text0}
                            </Text>
                            <TextMobile>
                                {sideTextM}
                            </TextMobile>
                        </BodyContents>
                    </Fade>
                        <BottomButton>
                            <ButtonContents>
                                <ButtonLink>
                                    <ButtonText>
                                        ORDER NOW
                                    </ButtonText>
                                </ButtonLink>
                                {lrnBtn && 
                                <ButtonLink>
                                    <ButtonText>
                                        {lrnBtn}
                                    </ButtonText>
                                </ButtonLink>
                                }
                            </ButtonContents>
                        </BottomButton>
                </TextContainer>
            </SideContainer>
            <ImageContainer>
                <ImageContent>
                    <picture>
                        <source srcSet={mobileImg} media='(max-width: 599px) and (orientation: portrait)'  />
                        <source srcSet={SidePic} media='(max-width: 899px) and (orientation: landscape)'   />
                        <source srcSet={SidePic} media='(min-width: 900px) and (orientation: landscape)' />
                        <source srcSet={SidePic} media='(min-width: 600px) and (orientation: portrait)' />
                        <Image alt='' src= {SidePic} />
                    </picture>
                </ImageContent>
                <ImageBtn 
                    boxHeader1 = {boxHeader1}
                    textBox1 = {textBox1}
                    subHeader1 = {subHeader1}
                    boxHeader2 = {boxHeader2}
                    textBox2 = {textBox2}
                    subHeader2 = {subHeader2}
                    boxHeader3 = {boxHeader3}
                    textBox3 = {textBox3}
                    subHeader3 = {subHeader3}
                    mText1 = {mText1}
                    mText2 = {mText2}
                    mText3 = {mText3}
                    />
            </ImageContainer>
            <Btn>
                <ButtonAndText
                    liteHeader = {liteHeader}
                    boldHeader={boldHeader}
                    text1 = {text1}
                    link = {link}
                    text0={text0}
                    strong1 = {strong1}
                    strong2 = {strong2}
                    textT2 = {text2}
                    text3 = {text3}
                    lrnBtn = {lrnBtn}
                    ordBtn = {ordBtn} 
            /> 
            </Btn>
        </Container>
    </Wrap>
  )
}

export default SideTextImage

const Wrap = styled.div`
    display: grid; 
    grid-template-rows: 1fr auto;
    // height: 100vh;
`

const Container = styled.section`
    // height: 100vh;
    display: grid;
    width: 100vw;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-top: 0;
    grid-template-rows: 1fr auto;
    @media (min-width: 1200px) {
        grid-template: "aside main" / 416px auto;
        block-size: 100%;
        // align-items: flex-end;
        // display: flex;
        // flex-grow: 1;
        // flex-flow: column nowrap;
    }
`

const SideContainer = styled.div`
    display: none;
    @media (min-width: 1200px) {
        padding-left: 48px;
        padding-right: 40px;
        padding-inline-start: 48px;
        display: block;
        padding-bottom: 32px;
        padding-top: 32px;
        padding-inline-end: 40px;
        grid-area: aside / aside / aside / aside;
    }
`
const TextContainer = styled.div`
    max-inline-size: 100%;
    margin-inline: 0;
    align-items: start;
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
`

const TextInner = styled.div`

`

const HeaderContents = styled.div`
    margin-left: 0;
    margin-right: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    text-align: start;
    padding-top: 16px;
    padding-block-start: 32px;
    padding-block-end: 8px;
    font-weight: 500;
    letter-spacing: -0.5px;
    color: #171a20;


    @media (min-width: 600px) {
        width: fit-content;
        letter-spacing: -0.5px;
        font-size: 28px;
        line-height: 36px;
    }
`

const Header = styled.span`
    font-size: 17px;
    font-weight: 300;
    line-height: 1.414;
    display: block;
`

const HeaderBold = styled.span`
    opacity: 1;
    transform: translateZ(0px);
    display: block;
`
const BodyContents = styled.section`
    padding-bottom: 16px;
    padding-top: 16px;
    margin-left: 0;
    margin-right: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    text-align: start;
    padding-top: 16px;
    @media (min-width: 600px) {
        width: fit-content;
    }
`

const Text = styled.p`
    display: block;
    padding-bottom: 0;
    a{
        box-shadow: 0 1px 0 0 currentColor;
        cursor: pointer;
    }
`

const TextMobile = styled(Text)`
    display: none;
`

const ImageContainer = styled.div`
    aspect-ratio: auto;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    color: #393c41;
    height: 569px;
    @media (min-width: 1200px) {
        grid-area: main / main / main / main;
        grid-template: ". aside aside aside main main main main main main ." / 416px auto;
        block-size: 100%;
        align-items: flex-end;
        display: flex;
        flex-grow: 1;
        flex-flow: column nowrap;
        height: 789px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        aspect-ratio: auto;
        height: 444px;
    }
`


const ImageContent = styled.div`
    top: 50%;
    transform: translateY(-50%) scale(1);
    height: 569px;
    position: relative;
    width: 100%;
    overflow: visible;
    @media (min-width: 1200px) {
        height: 789px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        height: 444px;
    }
`

const Image = styled.img`
    object-position: center center;
    height: 569px;
    width: 100%;
    display: block;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    inset-inline-start: 0;
    left: 0;
    bottom: 0;
    top: 0;
    position: static;
    object-fit: cover;
    min-width: 0;
    max-width: none;
    @media (min-width: 1200px) {
        height: 789px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        height: 444px;
        block-size: 444px;
    }
`

const BottomButton = styled.div`
    margin: 16px 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    text-align: start;
    align-items: flex-end;
    display: flex;
    flex-grow: 1;
    max-width: 432px;
    justify-content: flex-end;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
`

const ButtonContents = styled.section`
    min-inline-size: 295px;
    inline-size: 100%;
    display: grid;
    grid-auto-columns: minmax(0px, 1fr);
    grid-auto-flow: row;
    justify-content: center;
    width: 100%;
    gap: 16px 24px;
    @media (min-width: 900px) {

    }
`
const ButtonText = styled.span`
    color: #171a20;
    line-height: 1.2;
    font-size: 12px;
    font-weight: 500;
    overflow-wrap: anywhere;
`

const ButtonLink = styled.a`
    margin: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    padding: 4px 24px;
    display: inline-flex;
    block-size: 40px;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: 3px solid #171a20;
    border-radius: calc(40px / 2);
    box-shadow: inset 0 0 0 2px transparent;
    background: transparent;
    position: relative;
    @media (min-width: 600px) {
        max-width: 100%;
        min-width: 156px;
        width: auto;
        inline-size: auto;
        inline-size: auto;
    }
    &:hover {
        background-color: #171a20;
        ${ButtonText} {
            color: #fff;
        }
    }
`

const Btn =styled.div`
@media (min-width: 1200px) {
    display: none;
}
`