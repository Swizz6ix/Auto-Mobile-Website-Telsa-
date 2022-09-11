import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function ImageBtn({boxHeader1, textBox1, subHeader1, boxHeader2, textBox2, subHeader2, boxHeader3, textBox3, subHeader3, clor, dzply, mText1, mText2, mText3}) {
  return (
    <Wrap dzply={dzply}>
        <Container>
            <Contents>
                <Header>
                    {/* <Fade bottom> */}
                    <Icon></Icon>
                    <IconText  clor={clor}>
                        {boxHeader1}
                        <SubText  clor={clor}>
                            {subHeader1}
                        </SubText>
                    </IconText>
                    {/* </Fade> */}
                </Header>
                <Fade bottom>
                <Text>
                    {textBox1}
                </Text>
                <MobileText clor={clor}>
                    {mText1}
                </MobileText>
                </Fade>
            </Contents>
            <Contents>
                <Header>
                    {/* <Fade bottom> */}
                    <Icon></Icon>
                    <IconText clor={clor}>
                        {boxHeader2}
                        <SubText  clor={clor}>
                            {subHeader2}
                        </SubText> 
                    </IconText>
                    {/* </Fade> */}
                </Header>
                <Fade bottom>
                <Text>
                    {textBox2}
                </Text> 
                <MobileText clor={clor}>
                    {mText2}
                </MobileText>
                </Fade>
            </Contents>
            <Contents>
                <Header>
                    {/* <Fade bottom> */}
                    <Icon></Icon>
                    <IconText  clor={clor}>
                        {boxHeader3}
                        <SubText  clor={clor}>
                            {subHeader3}
                        </SubText>
                    </IconText>
                    {/* </Fade> */}
                </Header>
                <Fade bottom>
                <Text >
                    {textBox3}
                </Text>
                <MobileText clor={clor}>
                    {mText3}
                </MobileText>
                </Fade> 
            </Contents>
        </Container>
    </Wrap>
  )
}

export default ImageBtn

const Wrap = styled.section`
    left: 0;
    display: flex;
    justify-content: center;
    inset-inline-start: 0;
    padding-bottom: 64px;
    position: absolute;
    width: 100%;
    bottom: 0;
    top: auto;
    @media (min-width: 900px) {
        bottom: 0;
        top: auto;
    }
    @media (max-width: 599px) {
        padding-bottom: 40px;
    }
    @media (min-width: 900px) {
        display: ${props => props.dzply || "flex"};
    }
`

const Container = styled.div`
    grid-template-columns: 272px 272px 272px;
    inline-size: auto;
    grid-gap: 24px;
    display: grid;
    justify-items: center;
    color: #e2e3e3;
    inline-size: auto;
    @media (min-width: 900px) {
        
    }
    @media (max-width: 375px) {
        padding-left: 24px;
        padding-right: 24px;
        padding-inline-end: 24px;
        padding-inline-start: 24px;
        width: 100%;
    }
    @media (max-width: 599px), (min-width: 600px) and @media (max-width: 899px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px 6px;
    }
`
const Contents = styled.section`
    transform: translateZ(0);
    transition: all .5s cubic-bezier(.455, .03, .515, .955) 0.15s;
    display: flex;
    text-align: center;
    align-items: center;
    flex-flow: column nowrap;
    @media (min-width: 600px) {
        max-width: 272px;
    }
    @media (max-width: 375px) {
        max-width: none;
    }
`
const Header = styled.section`
    align-items: baseline;
    padding: 0;
    line-height: 1em;
    justify-content: center;
    flex-flow: row nowrap;
    display: flex;
    @media (min-width: 599px) {
        min-height: 24px;
        font-size: 20px;
    }
`

const Text = styled.p`
    color: #fff;
    padding-bottom: 0;
    padding-top: 8px;
    font-size: 12px;
    line-height: 18px;
    padding-block-start: 12px;
    @media (max-width: 599px) {
        display: none;
    }
`
const MobileText = styled.p`
    display: block;
    color: ${props => props.clor || '#fff'};
    padding-bottom: 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    @media (min-width: 600px) {
        display: none;
    }
`

const Icon = styled.div`
    margin-right: 4px;
    height: 20px;
    margin-inline-end: 4px;
    position: relative;
    width: 40px;
    display: none;
`
const IconText = styled.div`
    color:${props => props.clor || '#fff'};
    align-items: baseline;
    flex-flow: row nowrap;
    font-weight: 500;
    justify-content: center;
    line-height: 1em;
    min-height: calc(24px + 4px);
    padding: 0;
    display: flex;
    direction: 1tr;
    @media (min-width: 600px) {
        letter-spacing: -0.5px;
        font-size: 24px;
        font-weight: 500;
    }
    @media (max-width: 599px) {
        min-height: 33px;
        font-size: 22px;
    }
`

const SubText = styled.span`
    padding-left: 4px;
    color: ${props => props.clor || '#fff'};
    line-height: 1em;
    padding-bottom: 0;
    padding-top: 0;
    padding-inline-start: 4px;
    @media (min-width: 600px) {
        letter-spacing: -0.6s;
        font-size: 24px;
    }
    @media (min-width: 599px) {
        min-height: 24px;
        font-size: 20px;
        padding-left: 2px;
        padding-right: 2px;
        adding-inline-start: 2px;
        adding-inline-end: 2px;
    }
`