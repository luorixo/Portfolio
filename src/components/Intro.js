import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile(1).png';

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height:55vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 100%) top;

    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index:1;
`

const SubBox = styled.div`
width: 100%;
position: relative;
display: flex;
text-align: justify;

.pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(0.8em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: auto;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:nth-last-child(3){
    color: ${props => `rgba(${props.theme.textRgba},0.75)` };
    font-size: calc(0.35rem + 1.5vw);
    font-weight: 300;
    margin-top: 1.5rem
}

&>*:nth-last-child(2){
    color: ${props => `rgba(${props.theme.textRgba},0.75)` };
    font-size: calc(0.35rem + 1.5vw);
    font-weight: 300;
    margin-top: 0.4rem;
}

icons{
    margin-top: 1rem;
}

i:not(:last-child){
    margin-right: 0.9rem;
}

i:hover{
    opacity: 0.8;
}
` 

const Intro = () => {
    return (
        <Box
        initial={{height:'0vh'}}
        animate={{height:'55vh'}}
        transition={{type:'spring', bounce:0.4, duration:1.8, delay:0}}
        >
            <SubBox>
                <Text>
                    <h1>Hey!</h1>
                    <h2>I'm Eugene.</h2>
                    <h6>I'm doing software engineering @ the University of Auckland.</h6>
                    <h6>I've worked with:</h6>
                    <icons>
                        <i class="fa-brands fa-python fa-lg"></i>
                        <i class="fa-brands fa-js fa-lg" title="JavaScript"></i>
                        <i class="fa-brands fa-react fa-lg"></i>
                        <i class="fa-brands fa-github fa-lg"></i>
                        <i class="fa-brands fa-git-alt fa-lg"></i>
                    </icons>
                </Text>
            </SubBox>
            {/*<SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1, delay:2 }}>
                    <img className="pic" src={Me} alt="Profile Pic"/>
                </motion.div>
            </SubBox>
            */}
        </Box>
    )
}

export default Intro