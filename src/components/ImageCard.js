import React from 'react';
import styled from 'styled-components';

function ImageCard({image, mobileImg}) {
  return (
    <Wrap>
      <picture>
        <source srcSet={mobileImg} media='(max-width: 599px) and (orientation: portrait)'  />
        <source srcSet={image} media='(max-width: 899px) and (orientation: landscape)'   />
        <source srcSet={image} media='(min-width: 900px) and (orientation: landscape)' />
        <source srcSet={image} media='(min-width: 600px) and (orientation: portrait)' />
        <Image src={image} alt='Product cover Image' />
      </picture>
    </Wrap>
  )
}

export default ImageCard

const Wrap = styled.div`
    top: 50%;
    transform: translateY(-50%) scale(1);
    height: 569px;
    overflow: visible;
    position: relative;
    width: 100%;
    @media (max-width: 599px) {
      height: 432px;
    }
`

const Image = styled.img`
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
    @media (max-width: 599px) {
      height: 432px;
    }
`