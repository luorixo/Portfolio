import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Logo = styled(NavLink)`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
text-decoration: none;
transition: ease-out 0.4s;
-webkit-tap-highlight-color: transparent;

h1{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 2em;
    font-weight: normal;
}

position: fixed;
left: 2rem;
top: 1.5rem;
z-index: 3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme} to={{pathname:"/"}}>
            <motion.h1
            initial={{
                y:-200,
                transition: { type:'spring', duration: 1.5, delay:0}
            }}
            animate={{
                y:0,
                transition: { type:'spring', bounce:0.4, duration: 2, delay:1.5}
            }}
            >
            echua.top
            </motion.h1>
        </Logo>
    )
}

export default LogoComponent;