import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function MidHeader({Title}) {
  return (
    <Wrap>
        <Container>
            <InnerContainer>
                <Content>
                    <Fade bottom>
                        <Text>
                            {Title}
                        </Text>
                    </Fade>
                </Content>
            </InnerContainer>
        </Container>
    </Wrap>
  )
}

export default MidHeader

const Wrap = styled.section`
    padding-inline-end: 0px;
    padding-inline-start: 0px;
    max-width: 100%;
    inline-size: 100%;
    display: block;
    margin-inline-end: auto;
    margin-inline-start: auto;
    max-inline-size: 100%
    padding-right: 0px;
    padding-left: 0px;
    background: #000;
    color: hsla(0, 0%, 100%, 0.2);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
`

const Container = styled.div`
    disply: flex;
    padding: 0;
    @media (min-width: 600px) {
        flex-flow: row wrap;
    }
`

const InnerContainer = styled.div`
    flex: 1 1 0%;
`

const Content = styled.section`
    opacity: 1;
    padding-bottom: 48px;
    padding-top: 48px;
    transform: translateZ(0px);
    z-index: auto;
    transition: transform 1500ms cubic-beier(0.165, 0.84, 0.44, 1), opacity 15ooms cubic-beier(0.165, 0.84, 0.44, 1);
`

const Text = styled.h2`
    margin: 0 auto;
    color: #fff;
    margin-inline: auto;
    text-align: center;
    @media (min-width: 600px) {
        letter-spacing: -0.5px;
        font-size: 28px;
        line-height: 36px;
    }
`