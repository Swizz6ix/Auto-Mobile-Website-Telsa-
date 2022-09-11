import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function OrderButton({bttn}) {
  return (
    <Div>
        <Container>
            <section>
                <Link>
                    <span>
                        {bttn}
                    </span>
                </Link>
            </section>
        </Container>
    </Div>
  )
}

export default OrderButton

const Div = styled.section`
    &::after {
        @media (min-width: 900px) {
            content: '';
            display: block;
            padding-bottom: 96px;
        }
    }
`

const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;

    & + & {
        min-inline-size: 204px;
        display: block;
        gap: 16px 24px;
        width: fit-content;
    }
`

const Link = styled.a`
    margin: 0;
    opacity: 1;
    transform: translateZ(0);
    z-index: auto;
    color: ${props => props.clor ||'#171a20'};
    background-color: transparent;
    border-color: #171a20;
    border-radius: calc(40px/2);
    border: 3px solid #171a20;
    align-items: center;
    block-size: 40px;
    // box-shadow: inset 0 0 0 2px;
    display: inline-flex;
    font-size: 12px;
    font-weight: 500;
    justify-content: center;
    line-height: 1.2;
    padding: 4px 24px;
    position: relative;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    @media (min-width: 600px) {
        max-width: none;
        min-width: 204px;
        width: auto;
        backdrop-filter: none;
        margin-inline-end: 0;
        margin-inline-start: 0;
        inline-size: auto;
    }
    &:hover {
        background-color: ${props => props.clor || "#000"};
        span {
            color: #fff;
        }
    }
    & + & {
        overflow-wrap: anywhere;
        width: 100%;
    }
`