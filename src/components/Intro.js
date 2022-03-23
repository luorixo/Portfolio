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
z-index: 2;

background: 
/*linear-gradient(
to right,
${props => props.theme.body} 0%,
${props => props.theme.text} 0%) bottom,
linear-gradient(
to right,
${props => props.theme.body} 00%,
${props => props.theme.text} 00%) top;*/

background-repeat: no-repeat;
background-size: 100% 2px;
border-left: 2px solid ${props => props.theme.body};
/*border-right: 2px solid ${props => props.theme.text};*/
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
font-size: calc(0.5em + 2.3vw);
color: ${props => props.theme.body};
padding: 0rem 3vw 1.75vh 3vw;
cursor: auto;

display: flex;
flex-direction: column;
justify-content: space-between;

&>*:nth-last-child(3){
    color: ${props => `rgba(${props.theme.textRgba},0.75)` };
    font-size: calc(0.35rem + 1.5vw);
    font-weight: 300;
    margin-top: 1.5vh
}

&>*:nth-last-child(2){
    color: ${props => `rgba(${props.theme.textRgba},0.75)` };
    font-size: calc(0.35rem + 1.5vw);
    font-weight: 300;
    margin-top: 4vh;
}

i:not(:last-child){
    margin-right: 0.9rem;
}

i {
    -webkit-transition: 0.3s;
}

i:hover{
    opacity: 0.8;
    color: #007859;
    transition: 0.3s;
}
` 

const Intro = () => {
    return (
        <Box
        initial={{height:'0vh'}}
        animate={{height:'min(50vw, 50vh)'}}
        transition={{type:'spring', bounce:0.4, duration:1.8, delay:0}}
        >
            <SubBox>
                <Text>
                    <h1>Hey!</h1>
                    <h2>I'm Eugene.</h2>
                    <h6>I do software engineering @ the University of Auckland.<br/>I <i class="fa-solid fa-heart"></i> plants, books, and tech!</h6>
                    <h6>I've worked with:</h6>
                    <icons>
                        <i class="fa-brands fa-python"></i>
                        <i class="fa-brands fa-js" title="JavaScript"></i>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-git-alt"></i>
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