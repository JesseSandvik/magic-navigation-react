import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CalendarOutline, HomeOutline, LibraryOutline } from 'react-ionicons';

import './navigation.css';
    
    const Navigation = () => {
        const location = useLocation();
        const [activeLink, setActiveLink] = useState("");

        useEffect(() => {
            function setClassNameByRoute() {
                if (location.pathname === "/") {
                    setActiveLink("home");
                } else if (location.pathname === "/recent") {
                    setActiveLink("recent");
                } else if (location.pathname === "/library") {
                    setActiveLink("library");
                }
            }
            setClassNameByRoute();
        }, [location])

    return (
        <nav>
            <ul>
                <li className={activeLink === "home" ? "list active" : "list"}>
                    <NavLink
                        className={(navData) => navData.isActive ? "active" : ""}
                        to="/" 
                        onClick={() => setActiveLink("home")}
                    >
                        <span className="icon"><HomeOutline /></span>
                        <span className="text">Home</span>
                    </NavLink>
                </li>
                <li className={activeLink === "recent" ? "list active" : "list"}>
                    <NavLink
                        className={(navData) => navData.isActive ? "active" : ""}
                        to="/recent"
                        onClick={() => setActiveLink("recent")}
                    >
                        <span className="icon"><CalendarOutline /></span>
                        <span className="text">Recent</span>
                    </NavLink>
                </li>
                <li className={activeLink === "library" ? "list active" : "list"}>
                    <NavLink
                        className={(navData) => navData.isActive ? "active" : ""}
                        to="/library"
                        onClick={() => setActiveLink("library")}
                    >
                        <span className="icon"><LibraryOutline /></span>
                        <span className="text">Library</span>
                    </NavLink>
                </li>
                <div className="indicator"></div>
            </ul>
        </nav>
    );
}

export default Navigation;