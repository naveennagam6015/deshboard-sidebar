import React from 'react';
import {
    FaRegChartBar,
    FaTh, FaUserAlt,

}from "react-icons/fa"

const Sidebar = () => {
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/",
            name:"",
            icon:<FaRegChartBar/>
        }
    ]
    return (
        <div>
            <h1>This is sidebar</h1>
        </div>
    );
};

export default Sidebar;