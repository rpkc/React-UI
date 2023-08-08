import React from "react";
import '../Style/Frame.css';
import LeftMenu from './LeftMenu';
import RightMain from './RightMain';
import { motion } from 'framer-motion';

export default function Frame(prop){

    return(
        <motion.div className="frame"
        initial={{opacity:0,transition:{duration:.5}}}
        animate={{opacity:1,transition:{duration:.5}}}
        exit={{opacity:0,transition:{duration:.5}}}>
            <LeftMenu ButtonInfo={prop.ButtonInfo} imgSrc={prop.imgSrc} lebel={prop.label}/>
            <RightMain/>
        </motion.div>
    );
}