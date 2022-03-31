import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import { motion } from 'framer-motion';
import ContactComponent from '../subComponents/Contact'


const Box = styled(motion.div)`
width: 100vw;
min-height: 100vh;
background-color: #C2DDDD;
`

const MainGrid = styled(motion.div)`
padding-top: max(9%, 8rem);
margin: auto;
width: 65vw;

display: grid;
align-items: center;
grid-template-columns: repeat(auto-fit, minmax(calc(8rem + 15vw), 1fr));
grid-gap: calc(0.5rem + 1vw);
`

const Entry = styled(motion.div)`
background: #fff;
border: 1px solid red;
height: 200px;
z-index: 0;
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

const Blog = () => {
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
                <MainGrid>
                    <Entry>I'm a blog</Entry>
                    <Entry>I'm a blog</Entry>
                    <Entry>I'm a blog</Entry>
                    <Entry>I'm a blog</Entry>
                    <Entry>I'm a blog</Entry>
                    <Entry>I'm a blog</Entry> 
                </MainGrid>
        </Box>
    )
}

export default Blog