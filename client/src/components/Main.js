import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

// background particles
import Particles from 'react-particles-js';
import configFeathers from "../config/particlesjs-config.json"

import LogoComponent from '../subComponents/LogoComponent'
import ContactComponent from '../subComponents/Contact';
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { CloudOne, GreenBird } from './AllSvgs'
import Intro from './Intro'

const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 1;
`

const MainContainer = styled(motion.div)`
background: #007859;
width: 100vw;
height: 100%;
overflow: hidden;
position: fixed;
z-index: 10;

h1, h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}

h2 {
    font-size: calc(1em + 0.55vw);
}
`

const Container = styled.div`
padding: 20rem;
left: 20%;
`

const BottomBar = styled.div`
position: absolute;
bottom: 2rem;
/*background: #fff;
padding: 1rem;*/
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const Blog = styled(NavLink)`
color: ${props => props.theme.body};
text-decoration: none;
z-index: 1;
transition: ease-out 0.4s;
`

const Projects = styled(NavLink)`
color: ${props => props.theme.body};
text-decoration: none;
z-index: 1;
`
const bounce = keyframes`
0% {
    /*transform: rotate(0);*/
    transform: translate(0, 0);
}

20% {
    transform: translate(0, 2px);
}

50% {
    /*transform: rotate(0);*/
    transform: translate(0, 23px);
}

60% {
    transform: translate(0, 6px);
}

80% {
    transform: translate(0, 2px);
}

100% {
    /*transform: rotate(360deg);*/
    transform: translate(0, 0);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'};
left: ${props => props.click ? '92%' :'50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
-webkit-tap-highlight-color: transparent;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1.1s ease;
z-index: 10;

&>:first-child {
    animation: ${bounce} infinite 1.1s linear;
}

&>:last-child {
    display: ${props => props.click ? 'none' : 'inline-block' };
    margin-top: 1rem;
}
`
const DarkDiv = styled.div`
position: absolute;
background-color: #C2DC71;
background-color: #d4e69b;
top: 0;
bottom: 0;
right: 0%;
width: ${props => props.click ? '100%' : '0%'};
height: ${props => props.click ? '100%' : '1%'};
transition: height 0.5s ease, width 1s ease 0.5s;
z-index: 1;
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

const Main = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <MainContainer variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.25}
        }}>
        
        <DarkDiv click={click}/>
        {click ? <LogoComponent theme={'dark'}/> : null }
            <Container>
                <Box>
                    <Particles style={{position:'absolute',top:0}} params={configFeathers}/>
                </Box>
                
                {click ? <SocialIcons style={{transition:'ease-out 0.4s'}} theme={'dark'}/> : null }

                <Center click={click}>
                
                    <GreenBird style={{cursor:'pointer'}} onClick={()=> handleClick()} width={click ? 'min(14vw, 15vh)' : 'max(14vw, 20vh)'} height={click ? 'min(14vw, 15vh)' : 'max(14vw, 20vh)'} fill='currentColor' alt='clickable green bird icon'/>
                    <span style={{color:'#fff'}}>click me ↑</span>
                </Center>

                {click ? <ContactComponent/>: null }
                
                {click ? <BottomBar>
                <Blog to={{pathname:"/blog"}}>
                    <motion.h2
                    initial={{
                        y:200,
                        transition: { type:'spring', duration: 1.5, delay:0}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', bounce:0.4, duration: 2, delay:1.6}
                    }}
                    whileHover={{scale: 1.15}}
                    whileTap={{scale: 0.9}}
                    >
                        ➪ My Blog.
                    </motion.h2>
                </Blog>
                <Projects to={{pathname:"/projects"}}>
                    <motion.h2
                    initial={{
                        y:200,
                        transition: { type:'spring', duration: 1.5, delay:0}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', bounce:0.4, duration: 2, delay:1.7}
                    }}
                    whileHover={{scale: 1.15}}
                    whileTap={{scale: 0.9}}
                    >
                        ➪ My Projects.
                    </motion.h2>
                </Projects>
                </BottomBar> : null }
                
            </Container>
            
            {click ? <Intro/> : null }
            
        </MainContainer>
    )
}

export default Main