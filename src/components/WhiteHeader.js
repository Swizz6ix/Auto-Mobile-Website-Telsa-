import React, {forwardRef, useRef, useState} from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Button, Dialog, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Link } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='left' ref={ref} {...props}  />;
});
function WhiteHeader(props, {clor}) {
    const [slideOut, setSlideOut] = useState(false);
    const refEl = useRef(null);

    const handleOpen = () => {
        setSlideOut(true);
    }
    const handleClose = () => {
        setSlideOut(false);
    }
  return (
    <Wrap>
        <Header>
            <LogoSpace>
                {/* <svg aria-hidden="true" class="tds-icon tcl-icon tcl-icon--round tcl-showcase__drawer-open-button-svg" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#tcl-icon-plus--small"/></svg> */}
                <Link to="/">
                    <Logo atl='Tesla Logo' src='/images/logo.svg' /> 
                </Link>
            </LogoSpace>
            <Menu>
                <MenuAlone>
                    <MenuButton onClick={handleOpen} clor={clor}>
                        Menu
                    </MenuButton>
                </MenuAlone>
                <MenuList>
                    <Link to="/models">
                        <MenuText>
                            Model S
                        </MenuText>
                    </Link>
                </MenuList>
                <MenuList>
                    <Link to="/model3">
                        <MenuText>
                            Model 3
                        </MenuText>
                    </Link>
                </MenuList>
                <MenuList>
                    <Link to="/modelx">
                        <MenuText>
                            Model X
                        </MenuText>
                    </Link>
                </MenuList>
                <MenuList>
                    <Link to="/modely">
                        <MenuText>
                            Model Y
                        </MenuText>
                    </Link>
                </MenuList>
                <MenuList>
                    <Link to="/solarroof">
                        <MenuText>
                            Solar Roof
                        </MenuText>
                    </Link>
                </MenuList>
                <MenuList>
                    <Link to="/solarpanels">
                        <MenuText>
                            Solar Panels
                        </MenuText>
                    </Link>
                </MenuList> 
            </Menu>
            <RightMenu>
                <MenuList>
                    <MenuText>
                        Shop
                    </MenuText>
                </MenuList>
                <MenuList>
                    <MenuText>
                        Account
                    </MenuText>
                </MenuList>
                <MenuList>
                    <MenuText onClick={handleOpen}>
                        Menu
                    </MenuText>
                </MenuList>
            </RightMenu>
        </Header>
        <div>
                <SlideMenu open={slideOut} 
            TransitionComponent={Transition} 
                onClose={handleClose}>
                    <Up>
                        <Close onClick={handleClose}>
                            <CloseIcon />
                        </Close>
                    </Up>
                    <Down>
                        <MenuHolder>
                            <MobileList>
                                <Link to="/models" onClick={handleClose}>
                                    <MenuText>
                                        Model S
                                    </MenuText>
                                </Link>
                            </MobileList>
                            <MobileList>
                                <Link to="/model3" onClick={handleClose} >
                                    <MenuText>
                                        Model 3
                                    </MenuText>
                                </Link>
                            </MobileList>
                            <MobileList>
                                <Link to="/modelx" onClick={handleClose}>
                                    <MenuText>
                                        Model X
                                    </MenuText>
                                </Link>
                            </MobileList>
                            <MobileList>
                                <Link to="/modely" onClick={handleClose}>
                                    <MenuText>
                                        Model Y
                                    </MenuText>
                                </Link>
                            </MobileList>
                            <MobileList>
                                <Link to="/solarroof" onClick={handleClose}>
                                    <MenuText>
                                        Solar Roof
                                    </MenuText>
                                </Link>
                            </MobileList>
                            <MobileList>
                                <Link to="/solarpanels" onClick={handleClose}>
                                    <MenuText>
                                        Solar Panels
                                    </MenuText>
                                </Link>
                            </MobileList> 
                            <MenuList>
                                <MenuText>
                                    Existing Inventory
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Used Inventory
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Trade-in
                                </MenuText>
                            </MenuList>
                                <MenuList>
                                    <MenuText>
                                        Test Drive
                                    </MenuText>
                                </MenuList>
                            <MenuList>
                                <MenuText>
                                        Insurance
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Cybertruck
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Roadster
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Semi
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Charging
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Powerwall
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Commercial Energy
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Utilities
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Find Us
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Support
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <MenuText>
                                    Investor Relation
                                </MenuText>
                            </MenuList>
                            <MenuList>
                                <Lang startIcon={<LanguageOutlinedIcon />}>
                                    <MenuText>
                                        United States
                                        <em>English</em>
                                    </MenuText>
                                </Lang>
                            </MenuList>
                        </MenuHolder>
                    </Down>
                </SlideMenu>

        </div>
        {/* <Blur></Blur> */}
    </Wrap>
  )
}

export default WhiteHeader

const Wrap = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    position: absolute;
    z-index: 50;
`

const Header = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    // position: relative;
    z-index: 50;
    flex-flow: row nowrap;
    top: 0;
    left: 0;
    right: 0;
    animation:
`

const LogoSpace = styled.section`
    min-block-size: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    position: relative;
    padding-inline-start: 8px;
    @media (min-width: 1199px) {
        min-inline-size: 240px;
    }

    @media (min-width: 1200px) {
        flex-basis: 0px;
        flex-grow: 1;
        padding-inline-start: 32px;
    }
    
`

const Logo = styled.img``

const Menu = styled.ol`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    z-index: 1;
    position: static;
    min-block-size: 56px;
    padding-inline-end: 8px;
    padding-inline-start: 8px;
    white-space: nowrap;
    transition: transform 0.5s ease 0s;
`

const MenuList = styled.li`
    background-color: transparent;
    white-space: nowrap;
    padding: 4px 8px;
    width: auto;
    inline-size: auto;
    block-size: 32px;
    border-radius: 12px;
    display: none;
    align-items: center;
    transition: opacity 0.5s ease 0s, background-color 0.5s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: hsla(0,0%,0%,0.05);
    }
    @media (min-width: 1200px) {
        display: inline-flex;
    }
`
const MobileList = styled(MenuList)`
    display: none !important;
    @media (max-width: 1199px) {
        display: inline-flex !important;
    }
`

const MenuText = styled.span`
    margin: 8px;
    transition: transform 0.5s ease 0s;
    font-weight: 500;
    color: #fff;
`

const RightMenu = styled(Menu)`
    justify-content: flex-end;
    display: none;
    @media (min-width: 1199px) {
        min-inline-size: 240px;
    }

    @media (min-width: 1200px) {
        flex-basis: 0px;
        flex-grow: 1;
        padding-inline-start: 32px;
        display: inline-flex;
    }
`
const MenuAlone = styled.li`
    padding-inline-end: 8px;
`

const MenuButton = styled(Button)`
    white-space: nowrap;
    background-color: hsla(0,0%,100%,0.2) !important;
    backdrop-filter: blur 16px !important;
    inline-size: auto;
    min-block-size: 12px;
    border-radius: 12px !important;
    transition: color 0.33s ease 0s, background-color 0.33s ease 0s;
    color:${props => props.clor || "#fff"} !important;
    text-transform: none !important;
    display: none !important;
    @media (max-width: 1199px) {
        display: block !important;
    }
`
const SlideMenu = styled(Dialog)`
    position: fixed;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: auto !important;
    // background-color: #fff !important;
    // background: #fff !important;
    // width: 311px;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    text-align: start;
    transition: opacity .5s cubic-bezzier(0.5, 0, 0, 0.75), transform .5s cubic-bezzier(0.5, 0, 0, 0.75), visibility .5s cubic-bezzier(0.5, 0, 0, 0.75);
    visibility: inherit;
    border: none;
    padding-block-end: 48px;
    z-index: 99;
    block-size: 100%;
    // inline-size: 311px;
    overflow-y: auto;
    overscroll-behavior: contain;
    @media (max-width: 1199px) {
        padding-block-end: 0
    }
    @media (min-width: 600px) {
        // transform: translateX(0) translateY(0);
        max-block-size: 100vh;
        margin: auto;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .16);
        max-inline-size: calc(100vw - 96px);
        // min-block-size: 64px;
        border-radius: 0px;
    }
    @media (max-width: 599px) {
        min-block-size: 25vh;
        // max-inline-size: calc(100vw - 48px);
    }
`
const Up = styled.div`
    padding-inline-end: 20px;
    padding-inline-start: 20px;
    position: static;
    padding: 20px;
    min-block-size: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 600px) {
        padding-inline-start: 48px;
        box-shadow: 0 -2px 0 0;
    }
`

const Down = styled.section`
    display: flex;
    flex-flow: column nowrap;
    text-align: start;
    padding: 0 24px 48px;
    padding-block-start: 4px;
    ${MenuText} {
        color: #171a20;
    }
    @media (min-width: 600px) {
        padding-inline-end: 32px;
        padding-inline-start: 32px;
    }
    @media (max-width: 640px) {
        padding-block-end: 50vh;
    }
`
const MenuHolder = styled.ol`
    position: relative;
    display: flex;
    align-items: normal;
    flex-flow: column;
    transition: transform 0.5s ease 0s;
    padding-inline-start: 0px;
    ${MenuList} {
        margin-block-end: 8px;
        line-height: 20px;
        display: inline-flex;
        &:last-child {
            block-size: auto;
        }
    }
`
const Blur = styled.div`
    position: fixed;
    block-size: 120vh;
    inline-size: 120vw;
    background-color: rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 50;
    // opacity: 0.3;
    filter: blur(4px);
    transition: background-color: 0.5s ease 0s, filter 0.5s ease 0s;
`
const Close = styled(Button)`
    border-radius: 15px !important;
`
const Lang = styled(Button)`
    ${MenuText} {
        display: inline-flex;
        flex-direction: column;
        align-items: start;
        em{
            font-weight: normal;
            &:hover {
                text-decoration: underline;
                font-weight: 300;
            }
        }
    }
`