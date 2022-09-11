import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ButtonAndText({liteHeader, boldHeader, text1, link, strong1, text2, strong2, text3, color, text0, lrnBtn, ordBtn, Lbk, hov}) {
  return (
        <Section>
            <Fade bottom>
                <div></div>
            </Fade>
            <Bottom>
                <section className='bottom__contents'>
                    <section className='bottom__items'>
                        <section className='bottom__top'>
                            <TextItem color={color} Lbk={Lbk}>
                                <Fade bottom>
                                    <p className='text__container' >
                                        {text1}
                                        <a> {link} </a>{text0}
                                        <br className='brk'/>
                                        <br className='brk'/>
                                        {strong1 && 
                                        <strong>
                                            {strong1}
                                        </strong>
                                        }
                                        <br className='brk'/>
                                        {text2}
                                        <br />
                                        <br className='brk'/>
                                        {strong2 &&
                                        <strong>
                                            {strong2}
                                        </strong>
                                        }
                                        <br className='brk'/>
                                        {text3}
                                    </p>
                                </Fade>
                            </TextItem>
                        </section>
                        <BottomLeft color={color}>
                            <Fade bottom>
                            <span className='leftText__container'>
                                <span className='text__safety'>{liteHeader} </span>
                                <span>{boldHeader}</span>
                            </span>
                            <Buttons>
                                {lrnBtn && 
                                <LrnButton  startIcon={<AddCircleOutlineIcon />} color={color}>
                                    {lrnBtn}
                                </LrnButton>
                                }
                                <section className='button__order'>
                                    {ordBtn && 
                                        <ButtonLink  color={color} hov={hov}>
                                            <ButtonText color={color} hov={hov} >
                                                {ordBtn}
                                            </ButtonText>
                                        </ButtonLink>
                                    }
                                </section>
                            </Buttons>
                            </Fade>
                        </BottomLeft>
                        <MobileTB>
                            <TextItem color={color} Lbk={Lbk}>
                                <Fade bottom>
                                    <p className='text__container' >
                                        {text1}
                                        <a> {link} </a>{text0}
                                        <br className='brk'/>
                                        <br className='brk'/>
                                        {strong1 && 
                                        <strong>
                                            {strong1}
                                        </strong>
                                        }
                                        <br className='brk'/>
                                        {text2}
                                        <br className='brk'/>
                                        <br className='brk'/>
                                        {strong2 &&
                                        <strong>
                                            {strong2}
                                        </strong>
                                        }
                                        <br className='brk'/>
                                        {text3}
                                    </p>
                                </Fade>
                            </TextItem>
                            <Buttons>
                                {lrnBtn && 
                                    <LrnButton  startIcon={<Icon><AddCircleOutlineIcon className='addIcon' /></Icon>} color={color}>
                                        {lrnBtn}
                                    </LrnButton>
                                }
                                <section className='button__order'>
                                    {ordBtn &&
                                    <ButtonLink  color={color} hov={hov}>
                                        <ButtonText color={color} hov={hov}>
                                            {ordBtn}
                                        </ButtonText>
                                    </ButtonLink>
                                    }
                                </section>
                            </Buttons>
                        </MobileTB>
                        <MobileHeader color={color}>
                            <span className='leftText__container'>
                                <span className='text__safety'>{liteHeader} </span>
                                <span>{boldHeader}</span>
                            </span>
                        </MobileHeader>
                    </section>
                </section>
            </Bottom>
        </Section>
  )
}

export default ButtonAndText

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: white;
`

const Section = styled.div`

`

const Bottom = styled.section`
    padding-bottom: 40px;
    padding-top: 24px;

    .bottom__contents {
        max-inline-size: 100%;
        align-items: start;
        margin-inline: 0;
        flex-flow: row nowrap;
        height: auto;
        display: block;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
    }

    .bottom__top {
        height: auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        display: none;
        flex-flow: column nowrap;
        width: 100%;
        grid-area: main;
        @media (min-width: 900px) {
            padding-left: 0;
            padding-inline-start: 0;
            display: flex;
        }
    }

    .bottom__items {
        height: auto;
        width: 100%;
        max-inline-size: 1440px;
        margin-inline-end: auto;
        margin-inline-start: auto;
        @media (min-width: 900px) {
            grid-template-areas: ". aside aside aside aside main main main main main main .";
            padding-inline-end: 40px;
            padding-inline-start: 40px;
        }

        @media (min-width: 600px) {
            margin-bottom: 0;
            margin-top: 0;
            grid-gap: 24px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            margin: auto;
            transition: padding .15s ease-in-out;
        }

        @media (max-width: 599px) {
            display: flex;
            flex-direction: column-reverse;
        }
        @media (max-width: 899px) {
            padding-inline-end: 24px;
            padding-inline-start: 24px;
            transition: padding .15s ease-in-out;
        }
        @media  (min-width: 600px) and (max-width: 899px) {
            padding-left: calc(32px + 4px);
            padding-right: calc(32px + 4px);
            padding-inline-end: calc(32px + 4px);
            padding-inline-start: calc(32px + 4px);
            display: flex;
            flex-flow: column-reverse nowrap;
            grid-template-areas: "aside aside aside aside aside main main main main main main main ";
        }
        @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
            max-width: 100vw;
        }
    }
`
const TextItem = styled.section`
    padding-bottom: 16px;
    padding-top: 16px;
    text-align: start;
    margin-inline-end: 0;
    margin-inline-start: 0;
    margin-right: 0;
    margin-left: 0;
    @media (min-width:600px) {
        width: fit-content;
        opacity: 1;
        transform: translateZ(0);
        transition: all .5s cubic-besier(.455, .03, .515, .955) .15s;
    }
    @media (max-width: 599px) {
            padding: 10px 0;
        }
    .text__container {
        padding-bottom: 0;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        max-inline-size: 75ch;
        color: ${props => props.color || "#171a20"};
        strong, a {
        color: ${props => props.color || "#171a20"};
        @media (max-width: 599px) {
            padding-top: 0;
            padding-block-start: 14px;
            font-size: 14px;
            line-height: 20px;
        }
        @media  (min-width: 600px) and (max-width: 899px) {
            display: block;
        }
    }
    .brk {
        display: ${props => props.Lbk || "none"};
    }

    .text__container > a {
        cursor: pointer;
        position: relative;
        text-align: initial;
        color: #171a20;
        padding: 0;
        border: 0;
        // text-decoration: underline;
        box-shadow: 0 1px 0 0 currentColor;
        transition: box-shadow .33s cubic-bezier(0.5, 0, 0, 0.75), color .33s ease;
        &:hover {
            box-shadow: 0 1px 0 0 #000;
        }
        @media (max-width: 599px) {
            calc(24px + 4px * -1);
        }
    }
`


    const BottomLeft = styled.div`
        grid-area: aside;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        display: none;
        flex-flow: column nowrap;
        width: 100%;
        inline-size: 100%;
        margin-inline: 0;
        inset-inline-start: 0;
        @media (min-width: 900px) {
            display: flex;
            }

        .leftText__container {
            margin-left: 0;
            margin-right: 0;
            margin-inline-end: 0;
            margin-inline-start: 0;
            text-align: start
            padding-top: 16px;
            color: #171a20;
            letter-spacing: -0.5px;
            padding-block-end: 8px;
            padding-block-start: 32px;
            font-weight: 500;
            transition: font .33s ease, color .33s ease, opacity .33s ease;
            @media (min-width: 600px) {
                width: fit-content;
                font-size:  28px;
                line-height: 36px;
            }
            @media (max-width: 599px) {
            padding-block-start: 10px;
        }
        }

        .leftText__container > span {
            color: ${props => props.color || "#171a20"};
            display: block;
            font-size: 28px;
            font=weight: 500;
            line-spacing: 36px
            @media (min-width:600px) {
                opacity: 1;
                transform: translateZ(0);
                transition: all .5s cubic-bezier(.455, .03, .515, .955) .15s;
            }
        }

        .text__safety {
            font-size: 17px;
            letter-spacing: -.4px;
            font-weight: 300;
            line-height: 1.414;
        }
    `

    const Buttons = styled.div`
        display:flex;
        justify-content: flex-end;
        flex-flow: column nowrap;
        -webkit-box-pack: end;
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        -webkit-box-align: start;
        max-width: 432px;
        margin: 16px 0;
        flex-grow: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        align-items: stretch;
        text-align: start;
        @media (min-width:600px) {
                opacity: 1;
                transform: translateZ(0);
                transition: all .5s cubic-bezier(.455, .03, .515, .955) .15s;
        }
        @media (max-width: 599px) {
        flex-flow: row nowrap;
        justify-content: unset;
        margin: 10px 0;
        }
        @media  (min-width: 600px) and (max-width: 899px) {
            display: flex;
            flex-flow: row nowrap;
            justify-content: unset;
        }

            .button__order {
            margin-top: 16px;
            margin-bottom: 16px;
            display: block;
            gap: 16px 24px;
            width: fit-content;
        }
    `

    const LrnButton = styled(Button)`
        display: flex;
        margin-right: 12px;
        border-color: #000;
        -webkit-box-pack: end;
        -webkit-box-direction: normal;
        -webkit-box-orient: horizontal;
        justify-content: flex-start !important;
        appearance: none;
        border: none;
        cursor: pointer;
        background-color: transparent;
        border-radius: calc(40px/2);
        flex-flow: row nowrap;
        font-size: 12px;
        font-weight: 500;
        margin-inline-end: 12px;
        outline: none;
        padding: 0;
        white-space: nowrap;
        overflow: visible;
        line-height: inherit;
        align-items: center;
        color:${props => props.color || "#171a20"} !important;
        @media (min-width: 600px) {
            max-width: 50%;
            min-width: 204px;
            width: auto;
            inline-size: auto;
        }
        span > svg {
            font-size: 40px !important;
            border: 1px solid;
            border-radius: 30px;
        }
        &:hover {
            background-color: ${props => props.color || "#171a20"} !important;
            color: #fff !important;
            border-radius: calc(40px/2);
            span > svg {
                fill: #fff !important;
                border-color: blueviolet;
            }
        }
    `
    const  ButtonText = styled.span`
    overflow-wrap: anywhere;
    width: 100%;
    color: ${props => props.color || "#171a20"};
    &:hover {
        color: ${props => props.hov || "#fff"};
    }
`

    const ButtonLink = styled.a`
    margin-left: 0;
    margin-right: 0;
    display: inline;
    border-radius: calc(40px/2);
    border: 3px solid #171a20;
    color: ${props => props.color || "#171a20"};
    align-items: center;
    background-color: transparent;
    padding: 4px 24px;
    block-size: 40px;
    box-shadow: inset 0 0 0 2px transparent;
    display: inline-flex;
    backdrop-filter: none;
    margin-bottom: 0;
    margin-top: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    font-size: 12px;
    font-weight: 500;
    justify-content: center;
    line-height: 1.2;
    position: relative;
    text-align: center;
    transition: border-color 0.33s ease 0s, background-color 0.33s ease 0s, color 0.33s ease 0s, box-shadow 0.25s ease 0s;
    cursor: pointer;
    &:hover {
        color: ${props => props.hov || "#fff"};
        background-color: ${props => props.color || "#171a20"};;
        border: none;
        ${ButtonText} {
            color: ${props => props.hov || "#fff"};
        }
    }
    @media (min-width: 600px) {
        max-width: 100%;
        min-width: 204px;
        width: auto;
        inline-size: auto;
    }
    @media (max-width: 899px) and (orientation: landscape) {
        min-width: auto;
        inline-size: 200px;
    }
`

const MobileTB = styled.div`
    height: auto;
    display: flex; 
    flex-flow: column nowrap;
    width: 100%;
    grid-area: main;
    @media (min-width: 600px) {
        padding-left: 0;
        padding-inline-start: 0;
    }
    @media (min-width: 899px) {
        display: none !important;
    }
`

const MobileHeader = styled(BottomLeft)`
    height: auto;
    grid-area: main;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    @media (min-width: 899px) {
        display: none;
    }
`
const Icon = styled(AddCircleOutlineIcon)`
    .addIcon{
            font-size: 40px !mportant;
        }
`