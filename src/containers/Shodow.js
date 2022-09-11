import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ButtonAndText from '../components/ButtonAndText';
import TextFloat from '../components/TextFloat';


function Shodow({avi, liteHeader, text0, link, boldHeader, text1, gridTemp, objFit, hgt, strong1, text2, strong2, text3, lrnBtn, ordBtn, mobileImg, Lbk}) {
  return (
    <Wrap gridTemp={gridTemp}>
        {/* <Fade bottom> */}
        <TextFloat
        boldHeader={boldHeader}
        liteHeader={liteHeader}
        strong1={strong1}
        strong2={strong2}
        link={link}
        text0={text0}
        text1={text1}
        text2={text2}
        text3={text3}
        lrnBtn={lrnBtn}
        ordBtn = {ordBtn} 
        />

        {/* </Fade> */}
            <SideImage hgt={hgt}>
                {/* <ImageContainer> */}
                    <ImageContent hgt={hgt}>
                        <picture>
                            <source srcSet={mobileImg} media='(max-width: 599px) and (orientation: portrait)'  />
                            <source srcSet={avi} media='(max-width: 899px) and (orientation: landscape)'   />
                            <source srcSet={avi} media='(min-width: 900px) and (orientation: landscape)' />
                            <source srcSet={avi} media='(min-width: 600px) and (orientation: portrait)' />
                            <Image objFit={objFit} hgt={hgt} src= {avi} alt='Product' />
                        </picture>
                    </ImageContent>
                    
                    <Drawables>
                    {/* <Fade Bottom> */}
                        <LineOne>
                            {/* <Text>
                                Impact Protection
                            </Text> */}
                        </LineOne>
                        <LineTwo>
                            {/* <Text>
                                Rigid Structure
                            </Text> */}
                        </LineTwo>
                        <LineThree>
                            {/* <TextDown>
                                Very Low Rollover Risk
                            </TextDown> */}
                        </LineThree>
                    {/* </Fade> */}
                </Drawables>
                {/* </ImageContainer> */}
            </SideImage>
            <Btn>
                <ButtonAndText
                    liteHeader = {liteHeader}
                    boldHeader={boldHeader}
                    text1 = {text1}
                    link = {link}
                    text0={text0}
                    strong1 = {strong1}
                    strong2 = {strong2}
                    text2 = {text2}
                    text3 = {text3}
                    lrnBtn = {lrnBtn}
                    ordBtn = {ordBtn} 
                    Lbk={Lbk}
            /> 
            </Btn>
    </Wrap>
  )
}

export default Shodow

const Wrap = styled.section`
    // max-block-size: 789px;
    // block-size: 789px;
     scroll-snap-align: start;
    object-fit: contain;
    font-size: 14px;
    scale: 1;
    display: grid;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;
    grid-template-rows: 1fr auto;
    @media (min-width: 1200px) {
        grid-template: ${props => props.gridTemp || "' asset header-group' / auto 416px"};
        block-size: 100%;
        align-items: flex-end;
        flex-grow: 1;
        flex-flow: column nowrap;
    }
    width: 100vw;
    // height: 100vh;
    @media (max-width: 599px) {
        height: auto;
        grid-template-rows: 472px auto;
    }
`
const SideImage = styled.div`
    aspect-ratio: auto;
    position: relative;
    overflow: hidden;
    padding-bottom: ${props => props.hgt && "0" || "50px"};
    @media (min-width: 1200px) {
        grid-area: asset / asset / asset / asset;
        max-block-size: 789px;
        block-size: 789px;
    }
    @media (min-width: 900px) {
        max-block-size: ${props => props.hgt || "493px"};
        block-size: ${props => props.hgt || "493px"};
    }
`

const ImageContainer = styled.section`
    aspect-ratio: auto;
    overflow: hidden;
    position: relative;
    block-size: ${props => props.hgt || "493px"};
`

const ImageContent = styled.div`
    top: 50%;
    transform: translateY(-50%) scale(1);
    height: ${props => props.hgt || "493px"};
    overflow: visible;
    position: relative;
    width: 100%;
    @media (min-width: 1200px) {
        height: 789px;
    }
`

const Image = styled.img`
    object-position: center center;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    max-width: none;
    min-width: 0;
    object-fit: ${props => props.objFit || 'contain'};
    left: 0;
    bottom: 0;
    top: 0;
    position: static;
    display: block; 
    float: none;
    height: ${props => props.hgt || "493px"};
    width: 100%;
    inset-inline-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    @media (min-width: 1200px) {
        height: 789px;
    }
`

const Drawables = styled.section`
    left: 0;
    height: 513px;
    position: absolute;
    width: 100%;
    transform: translateY(-50%) scale(1);
    top: 50%;
    font-size: 14px;
    inset-inline-start: 0;
`

const LineOne = styled.section`
    block-size: 504px;
    inset-inline-start: calc(864px * 0.273889 + 195.6px);;
    inset-inline-block-size: 864px;
    font-weight: 500;
    left: calc(864px * 0.273889 + 195.6px);
    width: 100%;
    top: calc(432px * 0.273889 + 0px);
    padding-bottom: 0;
    line-height: 1;
    position: absolute;
    inset-inline-start: calc(864px * 0.273889 + 195.6px);
    height: calc(504px * 0.273889);
    display: block;
    // &::before {
    //     background-color: #000;
    //     transform: scaleY(1);
    //     left: 3px;
    //     bottom: 1px;
    //     content: '';
    //     display: block;
    //     inset-inline-start: 3px;
    //     position: absolute;
    //     top: 0px;
    //     width: 3px;
    //     transition: all 1s cubic-bezier(.23, 1, .32, 1) .1s;
    // }

    // &::after {
    //     left: 0;
    //     bottom: 0;
    //     top: auto;
    //     transform: scaleY(1);
    //     border: 2px solid #000;
    //     border-radius: 8px;
    //     box-sizing: initial;
    //     position: absolute;
    //     content: "";
    //     display: block;
    //     height: 5px;
    //     inset-inline-start: 0;
    //     transition: all 1s cubic-bezier(.23, 1, .32, 1) .1s;
    //     width: 5px;
    //     background-color: #fff;
    }
`

const LineTwo = styled(LineOne)`
    left: calc(1440px * 0.273889 + 195.6px);
    display: block;
    height: calc(288px * 0.273889);
    inset-inline-start: calc(1440px * 0.273889 + 195.6px);
    line-height: 1;
    padding-bottom: 0px;
    top: calc(252px * 0.273889 + 0px);
    width: 100%;
    font-weight: 500px;
    &::before {
        transform-origin: 0px 100%;
    }

    &::after {
        left: 0;
        bottom: 0;
        top: auto;
    }
    
`

const LineThree = styled(LineOne)`
    left: calc(1526.4px * 0.273889 + 195.6px);
    display: block;
    height: calc(396px * 0.273889);
    inset-inline-start: calc(1526.4px * 0.273889 + 195.6px);
    top: calc(1062px * 0.273889 + 0px);
    &::before {
        transform-origin: 0px 0px;
    }

    &::after {
        left: 0;
        bottom: auto;
        top: 0;
    }
`


const Text= styled.span`
    position: absolute;
    opacity: 1;
    transform: translateY(0px);
    left:16px;
    display: block;
    inset-inline-start: 16px;
    top: -5px;
    margin: 0;
    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s;
`

const TextDown = styled(Text)`
    bottom: -5px;
    top: auto;
`
const Btn =styled.div`
@media (min-width: 1200px) {
    display: none;
}
`