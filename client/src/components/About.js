import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import { motion } from 'framer-motion';
import ContactComponent from '../subComponents/Contact'

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};

background-color: ${props => props.theme.text};
background-color: #C2DC71;
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
            duration: 0.25,
        }
    }
}

const About = () => {
    return (
        <Box variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.25}
        }}>
            <LogoComponent theme={'dark'}/> 
            <ContactComponent/>
            <SocialIcons theme='dark'/>
            <ParticleComponent theme='dark'/>
            
        </Box>
    )
}

export default About