import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import { motion } from 'framer-motion';
import ContactComponent from '../subComponents/Contact'

const Box = styled(motion.div)`
    text-align: center;
    height: 100%;
`

const GlobalStyle = createGlobalStyle`
body {
    background-color: #C2DCAA;
}
`

const MainGrid = styled(motion.div)`
border: 2px solid black;
position: absolute;
left: 50%;
top: max(20%, 6rem);
transform: translate(-50%, -50%);
height: auto;

width: 65vw;

display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
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
            <GlobalStyle/>
            <LogoComponent theme={'dark'}/> 
            <ContactComponent/>
            <SocialIcons theme='dark'/>
            <ParticleComponent theme='dark'/>
            <MainGrid>
                <div>Entry1</div>
                <div>Entry2</div>
            


            </MainGrid>
        </Box>
    )
}

export default Blog