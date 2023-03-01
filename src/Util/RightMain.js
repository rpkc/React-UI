// Level 2 Component
// Sidenav Mobile Menu 
import React from "react";
import {Outlet} from "react-router-dom";
import { motion } from 'framer-motion';
export default function RightMain()
{
    return(
        <motion.div className="right-pane" 
        initial={{x:"50vw",opacity:0,transition:{duration:.5},zIndex:0}}
        animate={{x:"0",opacity:1,transition:{duration:.5}}}
        exit={{x:"50vw",opacity:0,transition:{duration:.5}}}
        > 
            <Outlet/>
        </motion.div>
    );
}