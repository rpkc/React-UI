import React from "react";
import '../Style/Frame.css';
import LeftMenu from './LeftMenu';
import RightMain from './RightMain';

export default function Frame(prop){

    return(
        <div className="frame">
            <LeftMenu ButtonInfo={prop.ButtonInfo} imgSrc={prop.imgSrc} lebel={prop.label}/>
            <RightMain/>
        </div>
    );
}