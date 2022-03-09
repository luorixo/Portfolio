import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { GreenBird } from './AllSvgs'
import Intro from './Intro'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h1, h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`
const Contact = styled(NavLink)`
color: ${props => props.theme.text};
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
color: ${props => props.theme.text};
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
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 0.8s ease;

&>:first-child {
    animation: ${rotate} infinite 1s linear;
}

&>:last-child {
    display: ${props => props.click ? 'none' : 'inline-block' };
    padding-top: 1rem;
}
`
const DarkDiv = styled.div`
position: absolute;
background-color: #631F0F;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s
`

const Main = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
        <DarkDiv click={click}/>
            <Container>
                <PowerButton/>
                <LogoComponent theme={click ? 'dark' : 'light'}/>
                <SocialIcons theme={click ? 'dark' : 'light'}/>

                <Center click={click}>
                    <GreenBird onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span style={{color:'#631F0F'}}>click me ↑</span>
                </Center>

                <Contact target="_blank" to={{pathname:"mailto:luorixo@gmail.com"}}>
                    <h2>
                        Say hi...
                    </h2>
                </Contact>
                <Blog to={{pathname:"/blog"}}>
                    <h2>
                        Blog
                    </h2>
                </Blog>
                <Work to={{pathname:"/work"}} click={click}>
                    <h2>
                        Work
                    </h2>
                </Work>

                <BottomBar>
                <About to={{pathname:"/about"}} click={click}>
                    <h2>
                        About.
                    </h2>
                </About>
                <Skills to={{pathname:"/skills"}}>
                    <h2>
                        Skills.
                    </h2>
                </Skills>
                </BottomBar>
                
            </Container>
            {click ? <Intro click={click}/> : null }
        </MainContainer>
    )
}

export default Main