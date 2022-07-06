import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import Leaf from '../assets/Images/leaf.png';

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

/*width: max(70vw, 70vh);*/
width: max(100vmin, 65vw);
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
/*border-left: 10px solid rgba(0,0,0,0.15);*/
/*border-right: 2px solid ${props => props.theme.text};*/

z-index:1;
`

const SubBox = styled.div`
width: 100%;
position: relative;
display: flex;
text-align: left;

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
font-size: calc(1.2em + 1.3vw);
color: ${props => props.theme.body};
padding: 0rem 3vw 1.75vh 3vw;
cursor: auto;

display: flex;
flex-direction: column;
justify-content: center;
line-height: 130%;

small{
    color: ${props => `rgba(${props.theme.textRgba},0.6)` };
    font-size: calc(0.4em + 1vh);
    font-weight: 400;
    letter-spacing: 0.5vw;
}

h2{
    font-size: calc(1em + 1vw) !important;
    font-weight: 100;
    line-height: calc(0.8em + 2.5vh);
}

red{
    color: #FF0000;
}

green{
    color: #647637;
}

&>*:nth-last-child(4){
    color: ${props => `rgba(${props.theme.textRgba},0.8)` };
    font-size: calc(0.4em + 1vw);
    font-weight: 400;
    margin-top: 0vh;
}

&>*:nth-last-child(3){
    color: ${props => `rgba(${props.theme.textRgba},0.8)` };
    font-size: calc(0.4em + 1vw);
    font-weight: 400;
    margin-top: 2.5vh;
}

&>*:nth-last-child(2){
    color: ${props => `rgba(${props.theme.textRgba},1)` };
    font-size: calc(0.4em + 1vw);
    font-weight: 800;
    margin-top: 1vh;
    margin-bottom: 0vh;
}

i:not(:last-child){
    margin-right: 1.25rem;
}

i {
    -webkit-transition: 0.3s;
}

i:hover{
    opacity: 0.8;
    color: #007859;
    color: #8AA92C;
    transition: 0.25s;
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
                    <small><green><motion.i whileHover={{scale: 1.35}} transition={{type:'spring', bounce:0.4, duration:0.1, delay:0}}
      whileTap={{skewY: 0.7}} class="fa-solid fa-seedling fa-sm"></motion.i></green> Hello there!</small>
                    <h2>I'm Eugene.</h2>
                    <h2>I study software engineering and <red><motion.i whileHover={{scale: 1.35}}
      whileTap={{skewY: 0.7}} class="fa-solid fa-heart fa-xs"></motion.i></red> plants, books, and tech!</h2>
                    <h6>I've worked with:</h6>
                    <icons>
                        <i class="fa-brands fa-python fa-sm"></i>
                        <i class="fa-brands fa-js fa-sm" title="JavaScript"></i>
                        <i class="fa-brands fa-react fa-sm"></i>
                        <i class="fa-brands fa-github fa-sm"></i>
                        <i class="fa-brands fa-git-alt fa-sm"></i>
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