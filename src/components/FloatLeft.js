import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function FloatLeft({floatHeader1, floatHeader2, floatHeader3, floatText1, floatText2, floatText3, floatSubTextOne1, floatSubTextOne2, floatSubTextOne3, floatSubTextTwo1, floatSubTextTwo2, floatSubTextTwo3, floatIcon1, floatIcon2, floatIcon3, floatSpan1, floatSpan2, floatSpan3}) {
    console.log('gh', floatHeader2, floatHeader1, floatHeader3)
    const sideTexts = [
        {
            id: 1,
            header: floatHeader1,
            text: floatText1,
            subText: floatSubTextOne1,
            subText1: floatSubTextTwo1,
            icon: floatIcon1,
        },
        {
            id: 2,
            header: floatHeader2,
            text: floatText2,
            subText: floatSubTextOne2,
            subText1: floatSubTextTwo2,
            icon: floatIcon2,
            span: floatSpan2,
        },
        {
            id: 3,
        header: floatHeader3,
            text: floatText3 ,
            subText: floatSubTextOne3,
            subText1: floatSubTextTwo3,
            icon: floatIcon3,
        }
    ]
  return (
    <Container>
        <InnerContainer>
            {sideTexts.map((sideText) => (
                <Fade bottom>
                    <Contents key={sideText.id}>
                        <Header>
                            <Icon>
                            {sideText.icon}
                            </Icon>
                            {sideText.header}
                            <Span>
                                {sideText.span}
                            </Span>
                        </Header>
                        <Text>
                            {sideText.text}
                        </Text>
                        <Text>
                            {sideText.subText}
                            <br></br>
                            {sideText.subText1}
                        </Text>
                    </Contents>
                </Fade>
            ))}
        </InnerContainer>
    </Container>
  )
}

export default FloatLeft

const Container = styled.section`
    display: flex;
    position: absolute;
    @media (min-width: 900px) {
        padding-left: 64px;
        right: auto;
        left: 0;
        padding-inline-start: 64px;
        justify-content: flex-start;
        inset-inline-end: auto;
        inset-inline-start: 0;
        align-items: center;
        bottom: auto;
        height: 100%;
        padding-bottom: 0;
        padding-top: 0;
        top: 0;
        width: auto;
    }
`

const InnerContainer = styled.section`
    grid-gap: 24px;
    color: #393c41;
    @media (min-width: 900px) {
        inline-size: 272px;
        padding-top: 24px;
        padding-bottom: 24px;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: none;
        justify-items: flex-start;
        align-items: start;
        justify-items: flex-start;
        margin: 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        display: flex;
        flex-flow: column nowrap;
        height: 577px;
        max-height: calc(8px * 80);
        justify-content: space-around;
    }
`

const Contents = styled.section`
    display: flex;
    -webkit-box-direction: normal;
    align-items: start;
    -webkit-box-align: start;
    flex-flow: column nowrap;
    max-width: 272px;
    text-align: start;
`

const Header = styled.div`
    color: #000;
    -webkit-box-align: baseline;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: start;
    align-items: baseline;
    flex-flow: row nowrap;
    justify-content: start;
    line-height: 1em;
    min-height: calc(24px + 4px);
    padding: 0;
    -webkit-box-direction: normal;
    display: flex;
    font-weight: 500;
    letter-spacing: -0.5px;
    padding-block-end: 8px;
    padding-block-start: 32px;
    transition: font .33s ease, color .33s ease, opacity .33s ease;
    @media (min-width: 600px) {
        font-size: 28px;
    }
`

const Text = styled.p`
    color: #000;
    padding-bottom: 0;
    padding-top: 8px;
    font-size: 12px;
    line-height: 18px;
    padding-block-start: 12px;

    & + & {
        @media (min-width: 900px) {
            display: none;
        }
    }
`

const Span = styled.span`
    padding-left: 4px;
    color: #000;
    line-height: 1em;
    padding-bottom: 0;
    padding-top: 0;
    padding-inline-start: 4px;
    font-weight: 500;
    letter-spacing: -0.6px;
    padding-block-end: 8px;
    padding-block-start: 32px;
    transition: font .33s ease, color .33s ease, opacity .33s ease;
    @media (min-width: 600px) {
        font-size: 24px;
    }
`

const Icon = styled.div`
    align-items: start;
    justify-content: start;
    padding-bottom: 4px;
    width: auto;
    display: flex;
`