import React from "react";
import '../Style/Wrapper.css';
import LeftMenu from './LeftMenu';
import RightContainer from './RightContainer';
export default function Wrapper(prop){

    return(
        <div className="wrapper">
            <LeftMenu ButtonInfo={prop.ButtonInfo} imgSrc={prop.imgSrc} lebel={prop.label}/>
            <RightContainer/>
        </div>
    );
}