import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Logo = styled(NavLink)`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family: 'Pacifico', cursive;
font-size: 1.5em;
text-decoration: none;
transition: ease-out 0.4s;
-webkit-tap-highlight-color: transparent;

position: fixed;
left: 2rem;
top: 1rem;
z-index: 3;
`



const LogoComponent = (props) => {
    return (
        <Logo color={props.theme} to={{pathname:"/"}}>
            
            echua.top
            
        </Logo>
    )
}

export default LogoComponent;