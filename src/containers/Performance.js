import React from 'react';
import styled from 'styled-components'
import ButtonAndText from '../components/ButtonAndText';
import ImageCard from '../components/ImageCard';
import ImageBtn from '../components/ImageBtn';
import FloatLeft from '../components/FloatLeft';
import FloatRight from '../components/FloatRight';

function Performance({liteHeader, boldHeader, text1, link, text0, strong1, text2, strong2, text3, image, boxHeader1, textBox1, subHeader1, boxHeader2, textBox2, subHeader2, boxHeader3, textBox3, subHeader3, floatHeader1, floatHeader2, floatHeader3, floatText1, floatText2, floatText3, floatSubTextOne1, floatSubTextOne2, floatSubTextOne3, floatSubTextTwo1, floatSubTextTwo2, floatSubTextTwo3, floatIcon1, floatIcon2, floatIcon3, floatSpan1, floatSpan2, floatSpan3, rightHeader1, rightHeader2, rightHeader3, rightSubHeader1, rightSubHeader2, rightSubHeader3, rightText1, rightText2, rightText3, rightIcon1, rightIcon2, rightIcon3, background, color, ordBtn, lrnBtn, mobileImg, clor, dzply, mText1, mText2, mText3, hov}) {
  return (
    <Wrap background={background}>
      <Image>
        <ImageCard 
        image = {image}
        mobileImg={mobileImg}
        />
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
        mText1={mText1}
        mText2={mText2}
        mText3={mText3}
        clor={clor}
        dzply={dzply}
        />
        <FloatLeft 
        floatHeader1 = {floatHeader1}
        floatHeader2 = {floatHeader2}
        floatHeader3 = {floatHeader3}
        floatText1 = {floatText1}
        floatText2 = {floatText2}
        floatText3 = {floatText3}
        floatSubTextOne1 = {floatSubTextOne1}
        floatSubTextOne2 = {floatSubTextOne2} 
        floatSubTextOne3 = {floatSubTextOne3}
        floatSubTextTwo1 = {floatSubTextTwo1} 
        floatSubTextTwo2 = {floatSubTextTwo2}
        floatSubTextTwo3 = {floatSubTextTwo3}
        floatIcon1 = {floatIcon1} 
        floatIcon2 = {floatIcon2} 
        floatIcon3 = {floatIcon3}
        floatSpan1 = {floatSpan1}
        floatSpan2 = {floatSpan2} 
        floatSpan3 = {floatSpan3}
        />
        <FloatRight 
        rightHeader1 = {rightHeader1}
        rightHeader2 = {rightHeader2}
        rightHeader3 = {rightHeader3}
        rightSubHeader1 = {rightSubHeader1}
        rightSubHeader2 = { rightSubHeader2}
        rightSubHeader3 = {rightSubHeader3}
        rightText1 = {rightText1}
        rightText2 = {rightText2}
        rightText3 = {rightText3}
        rightIcon1 = {rightIcon1}
        rightIcon2 = {rightIcon2}
        rightIcon3 = {rightIcon3}
        />
      </Image>
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
          image = {image}
          color={color}
          hov={hov}
        />
    </Wrap>
  )
}

export default Performance

const Wrap = styled.section`
  // max-block-size: 569px;
  // block-size: 569px;
  grid-template-rows: 1fr auto;
  scroll-snap-align: start;
  height: 100vh;
  display: grid;
  width: 100vw;
  margin-bottom: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-top: 0;
  background-color: ${props => props.background || '#fff'};
  @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
    min-height: 812px;
    aspect-ratio: auto;
    max-block-size: 432px;
  // block-size: 432px;
  }
`

const Image = styled.div`
  // max-block-size: 569px;
  // block-size: 569px;
  aspect-ratio: auto;
  overflow: hidden;
  position: relative;
  @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
    // height: 432px;
    // max-block-size: 432px;
    // block-size: 432px;
      aspect-ratio: auto;
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