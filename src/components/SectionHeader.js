import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function SectionHeader({title, description, backgroundImg, leftBtnText, rightBtnText, className}) {
  return (
    <div className='sectionHeader'>
        <Container >
            <Wrap bgImage={backgroundImg}>
                <Fade bottom>
                    <ItemText>
                        <h1 className='header'>{title}</h1>
                        <p>{description}</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <Fade bottom>
                        <Section>
                            <section className='container'>
                                <section className='containerTesx'>
                                    <div className='textDiv'>
                                    <h1 className='text'>333mi</h1>
                                    </div>
                                </section>
                                <section>
                                    <div>
                                        <p>0-60 mph*</p>
                                    </div>
                                </section>
                            </section>
                            <section className='container'>
                                <section className='containerTesx'>
                                    <div className='textDiv'>
                                    <h1 className='text'>333mi</h1>
                                    </div>
                                </section>
                                <section>
                                    <div>
                                        <p>0-60 mph*</p>
                                    </div>
                                </section>
                            </section>
                            <section className='container'>
                                <section className='containerTesx'>
                                    <div className='textDiv'>
                                    <h1 className='text'>333mi</h1>
                                    </div>
                                </section>
                                <section>
                                    <div>
                                        <p>0-60 mph*</p>
                                    </div>
                                </section>
                            </section>
                            
                            <ButtonGroup>
                                <LeftButton>
                                    {leftBtnText}
                                </LeftButton>
                                { rightBtnText && 
                                <RightButton>
                                {rightBtnText}
                                </RightButton>
                                }
                            </ButtonGroup>
                        </Section>

                    </Fade>
                    <DownArrow src={"/images/down-arrow.svg"} />
                </Buttons>

            </Wrap>
        </Container>

    </div>
  )
}

export default SectionHeader

const Container = styled.div`
    z-index: 2;
    grid-area: 1 / -1;
    inset-block-end: 20%;
    inset-block-start: 20%;
    height: 100vh;
    position: relative;
    width: 100%;
    overflow: visible;
&::after {
    content: "";
    height: 20%;
    opacity: 1;
    position: absolute;
    width: 100%;
    top: auto;
    bottom: 0px;
    background: linear-gradient(to top, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 100%);

}
`

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    // background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    
    .header {
        color: #f4f4f4;
        margin-top: 50px;
        line-height: 1.3;
        letter-spacing: 1px;
    }
    color: white;
`
const Section = styled.div`
    display: grid;
    justify-items: center;
    grid-gap: 24px;
    grid-template-columns: calc(8px*20) calc(8px*20) calc(8px*20) 212px;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
    }
    p{
        color: #fff;
    }

    .textDiv {
        
    }

    .text {
        color: #fff;


    }
`

const Buttons = styled.div`
    z-index: 3;
`

const ButtonGroup = styled.div`
// display: flex;
// margin-bottom: 30px;
// @media (max-width: 768px) {
    // flex-direction: column;
// }
`

const LeftButton = styled.div`
    background-color: transparent;
    border: 1px solid #f4f4f4;
    height: 40px;
    width: 256px;
    color: #f4f4f4;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    block-size: 40px;
    line-height: 1.2;
    padding: 4px 24px;
    position: relative;
    transition: border-color .33s ease, background-color .33s ease, color .33s ease, box-shadow .25s ease;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    // margin: 8px;
    margin-inline-start: 8px;
    margin-inline-end: 0;
    box-shadow: inset 0 0 0 2px transparent;
    margin-bottom: 0px;
    margin-top: 0px;
    backdrop-filter: none;
    box-sizing: border-box;
    scroll-behavoir: smooth;
    transition-delay: 0.6s;
    @media (max-width: 600px) {
        width: 204px
        min-width: 0;
        max-width: 0;
        inline-size: auto;
    }
`

const RightButton = styled(LeftButton)`
    color: black;
    background: white;
    opacity: 0.65;
    
`
const DownArrow = styled.img`
    margin-left: 250px;
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    @media (max-width: 768px) {
    margin-left: 115px;

}
`