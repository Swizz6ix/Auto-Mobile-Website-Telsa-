import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function FloatRight({rightHeader1, rightHeader2, rightHeader3, rightSubHeader1, rightSubHeader2, rightSubHeader3, rightText1, rightText2, rightText3, rightIcon1, rightIcon2, rightIcon3}) {
  return (
    <Wrap>
      <Contents>
        <Container>
          <Fade bottom>
            <Header>
              {rightHeader1}
              <SubHeader>
                {rightSubHeader1}
              </SubHeader>
            </Header>
            <Text>
              {rightText1}
            </Text>
          </Fade>
        </Container>
        <Container>
          <Fade bottom>
            <IconHolder>
              {rightIcon2}
            </IconHolder>
            <Text>
              {rightText2}
            </Text>
          </Fade>
        </Container>
        <Container>
          <Fade bottom>
            <IconHolder>
              {rightIcon3}
            </IconHolder>
            <Text>
              {rightText3}
            </Text>
          </Fade>
        </Container>
      </Contents>
    </Wrap>
  )
}

export default FloatRight

const Wrap = styled.section`
  display: flex;
  position: absolute;
  @media (min-width: 900px) {
    padding-right: 64px;
    right: 0;
    left: 0;
    inset-inline-end: 0;
    inset-inline-start: auto;
    justify-content: flex-end;
    padding-inline-end: 64px;
    max-block-size: calc(8px * 80);
    align-items: center;
    bottom: auto;
    height: 100%;
    padding-bottom: 0;
    padding-top: 0;
    top: 0;
    width: auto;
  }
`
const Contents = styled.section`
  inline-size: auto;
  grid-gap: 24px;
  @media (min-width: 900px) {
    padding-bottom: 24px;
    padding-top: 24px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: none;
    justify-items: flex-start;
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    height: 569px;
    justify-content: space-around;
    max-height: calc(8px * 80)
    inline-size: 272px;
  }
`

const Container = styled.section`
  display: flex;
  align-items: start;
  flex-flow: column nowrap;
  max-width: 272px;
  text-align: start;
  @media (min-width: 600px) {
    opacity: 1;
    transform: translateZ(0);
    transition: all .5s cubic-bezier(.455, .03, .515, .955) 0.15s;
  }
`

const Header = styled.div`
  color: #fff;
  align-items: baseline;
  justify-content: start;
  line-height: 1em;
  min-height: calc(24px + 4px);
  padding: 0;
  display: flex;
  letter-spacing: -0.5px;
  font-size: 28px;
  weight: 500;
  padding-block-end: 8px;
  padding-block-start: 32px;
  margin: 0;
  transition: font .33s ease, color .33s ease, opacity .33s ease;
`

const SubHeader = styled.span`
  padding-left: 4px;
  line-height: 1em;
  padding-bottom: 0;
  padding-top: 0;
  color: #fff;
  padding-inline-start: 4px;
  @media (min-width: 600px) {
    font-size: 24px;
    letter-spacing: -0.6px
  }
`

const IconHolder = styled.div`
  height: calc(24px + 4px);
  align-items: start;
  display: flex;
  margin: 0;
  padding: 0;
  width: auto;
  color: #fff;
`

const Text = styled.p`
  color: #fff;
  padding-bottom: 0;
  // padding-top: 8px;
  font-size: 12px;
  line-height: 18px;
  // padding-block-start: 12px;
`
