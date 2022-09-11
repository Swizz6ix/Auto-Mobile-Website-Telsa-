import React from 'react';
import styled from 'styled-components';
import TextFloat from '../components/TextFloat';
import ButtonAndText from '../components/ButtonAndText';
import ImageBtn from '../components/ImageBtn';

function SideVideo({vid, gridVid, boldHeader, text1, text0, ordBtn,  liteHeader, link, text2, strong1, text3, strong2, boxHeader1, textBox1, subHeader1, boxHeader2, textBox2, subHeader2, boxHeader3, textBox3, subHeader3, mText1, mText2, mText3}) {
  return (
    <Wrap gridVid={gridVid}>
        <TextFloat 
        boldHeader={boldHeader}
        liteHeader = {liteHeader}
        text1={text1}
        link={link}
        text0={text0}
        ordBtn={ordBtn}
        />
        <SideImage>
            <ImageContent>
                <Video muted autoPlay loop>
                    <source alt="product video" src={vid} />
                </Video>
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
            </ImageContent>
        </SideImage>
        <Btn>
            <ButtonAndText
                boldHeader={boldHeader}
                liteHeader = {liteHeader}
                text1 = {text1}
                link = {link}
                strong1 = {strong1}
                strong2 = {strong2}
                text2 = {text2}
                text3 = {text3}
                text0={text0}
                ordBtn={ordBtn}
            /> 
        </Btn>
    </Wrap>
  )
}

export default SideVideo

const Wrap = styled.div`
    // max-block-size: 789px;
    // block-size: 789px;
    object-fit: contain;
    font-size: 14px;
    display: grid;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;
    grid-template-rows: 1fr auto;
    @media (min-width: 1200px) {
        grid-template: ${props => props.gridVid || "' asset header-group' / auto 416px"};
        block-size: 100%;
        // align-items: flex-end;
        // flex-grow: 1;
        // flex-flow: column nowrap;
    }
    width: 100vw;
    // height: 100vh;
`
const SideImage = styled.div`
    max-block-size: 569px;
    block-size: 569px;
    aspect-ratio: auto;
    position: relative;
    overflow: hidden;
    @media (min-width: 1200px) {
        grid-area: asset / asset / asset / asset;
        max-block-size: 789px;
        block-size: 789px;
    }
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        aspect-ratio: auto;
        height: 432px;
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
        aspect-ratio: auto;
        height: 432px;
    }
`

const Video = styled.video`
    object-position: center center;
    // height: 569px;
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
        aspect-ratio: auto;
        height: 432px;
    }
`

const Btn =styled.div`
@media (min-width: 1200px) {
    display: none;
}
`