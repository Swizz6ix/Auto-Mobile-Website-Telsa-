import React from 'react';
import styled from 'styled-components';
import ButtonAndText from '../components/ButtonAndText';
import VideoCard from '../components/VideoCard';

function VidBtn({video, liteHeader, boldHeader, text1, text0, link, strong1, text2, strong2, text3, lrnBtn, ordBtn}) {
  return (
    <Wrap>
        <Video>
            <VideoCard alt="Product video" video = {video} />
        </Video>
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
    </Wrap>
  )
}

export default VidBtn

const Wrap = styled.section`
    grid-template-rows: 1fr auto;
    display: grid;
    width: 100vw;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-top: 0;
    
`

const Video = styled.div`
    max-block-size: 569px;
    block-size: 569px;
    aspect-ratio: auto;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        height: 431px;
        width: 100%;
    }
`