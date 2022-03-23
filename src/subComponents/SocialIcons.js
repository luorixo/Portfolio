import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Email, Github, Linkedin } from '../components/AllSvgs';
import {darkTheme} from '../components/Themes'
import { motion } from "framer-motion";

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}
`
const rotate = styled.div`
transform: rotate(-90deg);
color: #fff;
`

const Line = styled(motion.span)`
width: 2px;
transition: ease-out 0.4s;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body };
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.5}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/luorixo"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body }/>
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/eugene-j-chua/"}}>
                    <Linkedin width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body }/>
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.7}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"mailto:luorixo@gmail.com"}}>
                    <Email width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body }/>
                </NavLink>
            </motion.div>

            <Line color={props.theme}
            initial={
                {
                    height:0,
                    opacity: 0
                }
            }
            animate={{
                height: '20vh',
                opacity: 1
            }}
            transition={{
                type:'spring', duration:1, delay:0, mass: 0.01
            }}
            />
        </Icons>  
    )
}

export default SocialIcons;