import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function VideoCard({video}) {
  return (
    <Wrap>
        <Video src={video} alt='Product Video' muted autoPlay loop />
        {/* <ImageBtn /> */}
    </Wrap>
  )
}

export default VideoCard

const Wrap = styled.div`
    top: 50%;
    transform: translateY(-50%) scale(1);
    height: 569px;
    overflow: visible;
    position: relative;
    width: 100%;
`

const Video = styled.video`
    object-position: center center;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    max-width: none;
    min-width: 0;
    object-fit: cover;
    left: 0;
    bottom: 0;
    top: 0;
    position: static;
    display: block; 
    float: none;
    height: 569px;
    width: 100%;
    inset-inline-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
`