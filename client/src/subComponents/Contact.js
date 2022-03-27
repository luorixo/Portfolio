import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
color: ${props => props.theme.body};
position: absolute;
top: 2rem;
right: calc(0.8rem + 1.3vw);
text-decoration: none;
z-index: 1;

h2 {
    font-family: 'Karla', sans-serif;
    font-weight: 500 !important;
}

`

const ContactComponent = () => {
    return(
        <Contact target="_blank" to={{pathname:"mailto:luorixo@gmail.com"}}>
            <motion.h2
            initial={{
                y:-200,
                transition: { type:'spring', duration: 1.5, delay:0}
            }}
            animate={{
                y:0,
                transition: { type:'spring', bounce:0.4, duration: 2, delay:1.8}
            }}
            whileHover={{scale: 1.15}}
            whileTap={{scale: 0.9}}
            >
                ✎ email me!
            </motion.h2>
        </Contact>
    )
}

export default ContactComponent