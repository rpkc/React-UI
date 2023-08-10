// Level 1 Component
//all upper unchangeable components
//Header + Navigation + Mini-navigation

import React from "react";
import { NavLink } from "react-router-dom";
import '../Style/Header.css';
// import './SideBar1.js';
export default function Header(){
  function openMenu(){
    document.getElementById("miniNav").focus();
  }
return(
  // <div>
    <div className="menu">
        <div className="header">C A L C U L O N</div>
        <ul className="menu-list">
          <li className="menu-item"><NavLink to='/calculator' info="Calculators" activeClassName="active"><i class="fa fa-calculator" aria-hidden="true"></i></NavLink></li>
          <li className="menu-item"><NavLink to='/archives' info="Archives" activeClassName="active"><i class="fa fa-archive" aria-hidden="true"></i></NavLink></li>
          <li className="menu-item"><NavLink to='/projects' info="Projects" activeClassName="active"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></NavLink></li>
          <li className="menu-item"><button className="menuButton" onClick={openMenu} info="Menu"><i class="fa fa-th" aria-hidden="true"></i></button></li>
        </ul>
        <div id="miniNav" class="mininav" tabIndex={0}>
        <NavLink to='/' activeClassName="active"><i class="fa fa-home" aria-hidden="true"></i> Home</NavLink>
        <NavLink to='/contact' activeClassName="active"><i class="fa fa-envelope" aria-hidden="true"></i> Contact</NavLink>
        <NavLink to='/about' activeClassName="active"><i class="fa fa-info-circle" aria-hidden="true"></i> About</NavLink>
        </div>     
      </div>    
)

};