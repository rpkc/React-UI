// Level 2 Component
// Sidenav Mobile Menu 
import React from "react";
import {Outlet} from "react-router-dom";
export default function RightMain()
{
    return(
        <div className="right-pane">
            <Outlet/>
        </div>
    );
}