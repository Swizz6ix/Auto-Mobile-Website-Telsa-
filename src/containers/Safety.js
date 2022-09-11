import React from 'react'
import styled from 'styled-components';
import ButtonAndText from '../components/ButtonAndText';
import TextFloat from '../components/TextFloat';
import ImageBtn from '../components/ImageBtn';

function Safety({SafePic, liteHeader, link, image, boldHeader, text1, strong1, text2, strong2, text3, boxHeader1,textBox1, subHeader1, boxHeader2, textBox2, subHeader2, boxHeader3, textBox3, subHeader3, lrnBtn, ordBtn, text0, mobileImg, mText1, mText2, mText3 }) {
  return (
    <div className='safety'>
    <Wrap>
          <TextFloat 
            boldHeader={boldHeader}
            liteHeader={liteHeader}
            text1={text1}
            link={link}
            text0 = {text0}
            strong1={strong1}
            text2={text2}
            strong2={strong2}
            text3={text3}
            ordBtn = {ordBtn}
            lrnBtn = {lrnBtn}
          />
      <SideImage className='asset'>
        <picture>
          <source srcSet={mobileImg} media='(max-width: 599px) and (orientation: portrait)'  />
          <source srcSet={SafePic} media='(max-width: 899px) and (orientation: landscape)'   />
          <source srcSet={SafePic} media='(min-width: 900px) and (orientation: landscape)' />
          <source srcSet={SafePic} media='(min-width: 600px) and (orientation: portrait)' />
          <Image src={SafePic} alt='' />
          </picture>
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
        
      </SideImage>
          <Btn>
            <ButtonAndText 
              liteHeader = {liteHeader}
              boldHeader = {boldHeader}
              text1 = {text1}
              text0 = {text0}
              link = {link}
              strong1 = {strong1}
              strong2= {strong2}
              text2 = {text2}
              text3 = {text3}
              image = {image}
              ordBtn = {ordBtn}
              lrnBtn = {lrnBtn}
            />
          </Btn>
    </Wrap>
    </div>
  )
}

export default Safety

const Wrap = styled.div`
  object-fit: contain;
  font-size: 14px;
  display: grid;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0;
  grid-template-rows: 1fr auto;
  @media (min-width: 1200px) {
    grid-template: 'asset header-group' / auto 416px;
    block-size: 100%;
    align-items: flex-end;
    flex-grow: 1;
    flex-flow: column nowrap;
    max-block-size: 789px;
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
`
const Image = styled.img`
  object-position: center center;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  left: 0;
  bottom: 0; 
  top: 0;
  transform: none;
  visibility: visible;
  width: 100%;
  border-radius: 0;
  display: block;
  float: none;
  height: 569px;
  max-width: none;
  min-width: 0;
  object-fit: cover;
  object-position: center;
  opacity: 1;
  position: static;
  inset-inline-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  @media (min-width: 1200px) {
    height: 789px;
  }
`
const Btn =styled.div`
@media (min-width: 1200px) {
  display: none;
}
`