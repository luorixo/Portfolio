import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

// background particles
import Particles from 'react-particles-js';
import configLayerOne from "../config/particlesjs-config-layer-one.json"
import configLayerTwo from "../config/particlesjs-config-layer-two.json"
import configStars from "../config/particlesjs-config-stars.json"
import configDragon from "../config/particlesjs-config-dragon.json"

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { GreenBird } from './AllSvgs'
//import img from "../assets/Images/hills.png"
import Intro from './Intro'

const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`

const MainContainer = styled.div`
background: ${props => props.theme.body};
background: #102F42;
background: #007859;
/*background-image: url();
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;*/
width: 100vw;
height: 100%;
overflow: hidden;
position: fixed;
z-index: 10;


h1, h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 20rem;
left: 20%;
`
const Contact = styled(NavLink)`
color: ${props => props.theme.text};
color: ${props => props.theme.body};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const Blog = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const Work = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
transition: ease-out 0.4s;
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

const About = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
transition: ease-out 0.4s;
`

const Skills = styled(NavLink)`
color: ${props => props.theme.body};
text-decoration: none;
z-index: 1;
`
const rotate = keyframes`
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
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
-webkit-tap-highlight-color: transparent;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
z-index: 10;

&>:first-child {
    animation: ${rotate} infinite 1.3s linear;
}

&>:last-child {
    display: ${props => props.click ? 'none' : 'inline-block' };
    padding-top: 1rem;
}
`
const DarkDiv = styled.div`
position: absolute;
background-color: #C2DC71;
top: 0;
bottom: 0;
right: 0%;
width: ${props => props.click ? '100%' : '0%'};
height: ${props => props.click ? '100%' : '1%'};
transition: height 0.5s ease, width 1.5s ease 0.8s;
z-index: 1;
`

const Main = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
        <DarkDiv click={click}/>
            <Container>
                {/*<PowerButton onClick={()=> handleClick()}/>*/}
                {click ? <LogoComponent click={click} theme={click ? 'dark' : 'light'} to={{pathname:"/"}}/> : null }
                <Box>
                    {/*<Particles style={{position:'absolute',top:0}} params={configStars}/>
                    <Particles style={{position:'absolute',top:0}} params={configLayerTwo}/>
                    {/*<Particles style={{position:'absolute',top:0}} params={configDragon}/>
                 <Particles style={{position:'absolute',top:0}} params={configLayerOne}/>*/}
                    
                    
                </Box>
                
                {click ? <SocialIcons click={click} style={{transition:'ease-out 0.4s'}} theme={click ? 'dark' : 'light'}/> : null }

                <Center click={click}>
                    <GreenBird style={{cursor:'pointer'}} onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span style={{color:'#fff'}}>click me ↑</span>
                </Center>

                {click ? <Contact click={click} target="_blank" to={{pathname:"mailto:luorixo@gmail.com"}}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:0}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', bounce:0.4, duration: 2.2, delay:1.8}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        email me!
                    </motion.h2>
                </Contact> : null }
                
                {click ? <BottomBar click={click}>
                <About to={{pathname:"/about"}} click={click}>
                    <motion.h2
                    initial={{
                        y:200,
                        transition: { type:'spring', duration: 1.5, delay:0}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', bounce:0.4, duration: 2.2, delay:1.8}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        About.
                    </motion.h2>
                </About>
                <Skills to={{pathname:"/skills"}}>
                    <motion.h2
                    initial={{
                        y:200,
                        transition: { type:'spring', duration: 1.5, delay:0}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', bounce:0.4, duration: 2.2, delay:1.8}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Skills.
                    </motion.h2>
                </Skills>
                </BottomBar> : null }
                
            </Container>
            {click ? <Intro click={click}/> : null }
        </MainContainer>
    )
}

export default Main