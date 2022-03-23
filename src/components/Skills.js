import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
background-color: #007859;
width: 100vw;
height: 100%;
position: fixed;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled(motion.ul)`
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

// framer-motion config
const container = {
    hidden: {opacity:0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box exit={{opacity: 0}}>
                <LogoComponent theme='dark' to={{pathname:"/"}}/>
                <SocialIcons theme='light'/>
                <ParticleComponent theme='dark'/>
                <Main variants={container} initial='hidden' animate='show'>
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
                <Main variants={container} initial='hidden' animate='show'>
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