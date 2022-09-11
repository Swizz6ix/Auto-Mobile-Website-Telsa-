import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function BigImage({LargePic, mobileImg}) {
  return (
    <Wrap>
        <Container>
            <picture>
                <source srcSet={mobileImg} media='(max-width: 599px) and (orientation: portrait)'  />
                <source srcSet={LargePic} media='(max-width: 899px) and (orientation: landscape)'   />
                <source srcSet={LargePic} media='(min-width: 900px) and (orientation: landscape)' />
                <source srcSet={LargePic} media='(min-width: 600px) and (orientation: portrait)' />
                <Image src={LargePic} alt='' />
            </picture>
        </Container>
    </Wrap>
  )
}

export default BigImage

const Wrap = styled.section`
    display: grid;
    z-index: 1;
    block-size: 100vh;
    height: 100vh;
    width: 100%;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 0px;
    padding-bottom: 0px;
    @media (min-width: 600px) {
        // inline-size: calc(8px * 33);
        min-inline-size: calc(8px * 33);
    }
`

const Container = styled.div`
    z-index: 2;
    grid-area: 1 / -1 / auto / auto;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: visible;

    &::before {
        content: '';
        height: 100%;
        opacity: 1;
        position: absolute;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 20%);
    }
`

const Image = styled.img`
    object-position: center center;
    opacity: 1;
    position: static;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    display: block;
    object-fit: cover;
    inset-inline-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    max-width: none;
    min-width: 0;
    visibility: visible;
`