import React, { useState } from 'react';
import "./Header.css"
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice"
import { useSelector } from "react-redux";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [active, setActive] = useState(true);
    const cars = useSelector(selectCars);
    console.log("err", cars)

    const handleRotate = (e) => {
        e.preventDefault();
            {active ? setActive(false) : setActive(true)}
            {burgerStatus ? setBurgerStatus(false) : setBurgerStatus(true)}
    }

  return (
    <Container>
        <a>
            <img src='/images/logo.svg' alt='Tesla Logo' />
        </a>

        <Menu>
            {cars && cars.map((car,index) => (
                <a key={index} href='#'>
                {car}
            </a>
            ))}
            
        
        </Menu>

        <RightMenu>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            <MenuToggle 
            onClick={handleRotate}
            >
                <One></One>
                <Two></Two>
                <Three
                active={active}
                ></Three>
                <Four
                active={active}></Four>
            </MenuToggle>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            {cars && cars.map((car, index) => (
                <li key={index}><a href='#'>{car} </a></li>
            ))}
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Roadaster</a></li>
            
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 18;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const MenuToggle = styled.div`
    cursor: pointer;
    width: 30px;
    z-index: 100;
    position: absolute;
    right: 30px;
    top: 25px;
    display: flex;
    flex-direction: column;
`

const One = styled.div`
    background-color: #393c41;
    height: 4px;
    border-radius: 25px;
    box-shadow: 0px 3px 13px rgba(0, 0, 0, .3);
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(.13, .24, .25, 1.64);
    margin-bottom: 4px;
`

const Two = styled(One)`
    margin-bottom: 4px;
`
const Three = styled(One)`
    transform: ${props => props.active ? "tanslate(0, 0) rotate(0deg)" : "translate(-1px, 0px) rotate(30deg)" };
    box-shadow: ${props => props.active ? "0px 3px 13px rgba(0, 0, 0, .3)" : "0px 3px 13px rgba(0, 0, 0, .4)"};
`
const Four = styled(One)`
    width: 8px;
    border-radius: 100px;
    margin-left: 10px;
    transform: ${props => props.active ? "translate(0px)" : "translate(-55px)"};
    background-color: ${props => props.active ? "#393c41" : "transparent"};
    box-shadow: ${props => props.active ? "0px 3px 13px rgba(0, 0, 0, .3)" : "0px 3px 13px rgba(0, 0, 0, .4)"};
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s ease-in-out;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        };
    };
`