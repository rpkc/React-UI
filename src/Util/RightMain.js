// Level 2 Component
// Sidenav Mobile Menu 
import React from "react";
import {Outlet} from "react-router-dom";
import { motion } from 'framer-motion';
export default function RightMain()
{
    return(
        <motion.div className="right-pane" 
        initial={{opacity:0,transition:{duration:.5}}}
        animate={{opacity:1,transition:{duration:.5}}}
        exit={{opacity:0,transition:{duration:.5}}}
        >
            <Outlet/>
        </motion.div>
    );
}