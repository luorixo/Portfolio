import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
height: -webkit-fill-available;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

&>*
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5em 0;

strong {
    marigin-bottom: 1rem;
    text-transform: uppercase;
}

ul, p {
    margin-left: 2rem;   
}
`

const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                <PowerButton theme='light'/>
                <ParticleComponent theme='light'/>
                <Main>
                    <Title>
                        <Design width={40} height={40}/> Designer
                    </Title>
                    <Description>
                        I love to create designs!.
                    </Description>
                    <Description>
                        <strong>I like to design</strong>
                        <ul>
                            <li>
                                Web Design
                            </li>
                            <li>
                                React
                            </li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40}/> Developer
                    </Title>
                    <Description>
                        I'm a student at somewhere somewhere.
                    </Description>
                    <Description>
                    <strong>Skills</strong>
                    <p>
                    HTML, CSS, JS, React, Tailwind,     
                    </p>
                    </Description>
                </Main>
            </Box>

        </ThemeProvider>
    )
}

export default Skills