 // Level 1 Component
// appers when sidenav is in use
import React from "react";
import '../Style/LeftMenu.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function LeftMenu(props){
    const [openLeftPane,setOpenLeftPane]=useState(true); // open-close menu
    const [leftMenuIcon,setLeftMenuIcon]=useState(false); // change icon
    
    const openLeftPaneFun=()=>{
      setOpenLeftPane(!openLeftPane);
      setLeftMenuIcon(!leftMenuIcon);}


      const jsondata=props.ButtonInfo;
        const DisplayData=jsondata.map(
          (info)=>{
            return(
              <li className="menu-item"><NavLink to={info.link} onClick={openLeftPaneFun} activeClassName="active">{info.label}</NavLink></li>
            )
          }
          
      )

    return(
        
            <div className={`left-pane${openLeftPane ? " close" : ""}`}>
              <button className='left-pane-menu-btn' onClick={openLeftPaneFun}>
            <i class={`fa ${leftMenuIcon ? "fa-times":"fa-bars"}`} aria-hidden="true"></i>
            </button>
              {/* Menu button */}
              <div className='logo-icon' >
              <img src={props.imgSrc} alt="calculon"/>
              </div>

              <h4>{props.lebel}</h4>
              
              <ul className="int-menu">
              {DisplayData}
                </ul>
            </div>
    );
}