import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Button } from '@mui/material';
import "./ScrollNav.css";
import { Link } from 'react-router-dom';

function ScrollNav({btn1, btn2}) {
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    let lastScroll = 0;
    const refEl = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', onscroll)
        function onscroll(){
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 200) {
                refEl.current.classList.remove(scrollUp);
                refEl.current.classList.add(scrollDown);
                return;
            }

            if (currentScroll > lastScroll && !refEl.current.classList.contains(scrollDown)) {
                refEl.current.classList.remove(scrollUp);
                refEl.current.classList.add(scrollDown)
            }

            else if (currentScroll < lastScroll && refEl.current.classList.contains(scrollDown)) {
                refEl.current.classList.remove(scrollDown);
                refEl.current.classList.add(scrollUp);
            }
            lastScroll = currentScroll;
        }

    
    }, [])

    function toTop() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    
  return (
    <div className='scrollNav' ref={refEl}>
        <Container>
            <Top>
                <LogoSpace>
                    <Link to="/">
                        <Logo atl='' src='/images/logo.svg' />
                    </Link>
                </LogoSpace>
                <Icon onClick={toTop}>
                    <ExpandLessIcon/>
                </Icon>
            </Top>
            <Bottom>
                <Contents>
                    {btn1 &&
                    <Click1>{btn1}</Click1>
                    }
                    {btn2 &&
                    <Click2 variant='contained'>{btn2}</Click2>
                    }
                </Contents>
            </Bottom>
        </Container>
    </div>
  )
}

export default ScrollNav

const Container = styled.div`
    display: none;
    top: 0;
    position: fixed;
    flex-flow: column nowrap;
    justify-content: normal;
    height: 112px;
    width: 100%;
    background-color: #fff;
    Padding: 0 24px;
    padding-inline-end: 24px;
    padding-inline-start: 24px;
    transition: all .3s ease 0s;
    z-index: 999;
    cursor: pointer;
    @media (max-width: 599px), (min-width: 600px) and (max-width: 899px) {
        display: flex;
    }
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 48px;
`

const Bottom = styled.div`
    margin: 0 auto;
    margin-inline-end: auto;
    margin-inline-start: auto;
    padding: 16px 0;
`

const LogoSpace = styled.div``

const Logo = styled.img``

const Icon = styled.div``

const Contents = styled.div`
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    justify-content: center;
    width: 100%;
    gap: 16px 24px;
`
const Click1 = styled(Button)`
    border-radius: calc(40px/2) !important;
    border: 3px solid #171a20 !important;
    box-shadow: 0 0 0 2px transparent !important;
    font-size: 12px !important;
    line-height: 1.2 !important;
    min-with: auto !important;
    inline-size: -web-fill-available !important;
    height: 32px;
    block-size: 32px;
    color: #171a20 !important;
    margin: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    &:hover {
        color: #fff !important;
        background-color: #000 !important;
    }
`

const Click2 = styled(Click1)`
    color: #fff !important;
    background-color: #000 !important;
    &:hover {
        color: #171a20 !important;
        background-color: transparent !important;
    }
`