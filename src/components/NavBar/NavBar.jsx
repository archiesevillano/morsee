import { NavLink } from "react-router-dom";
import { RouteContext } from "../../Contexts/RouteContext";
import "./NavBar.scss";
import { useContext, useState, useEffect } from 'react';

const NavBar = () => {

    const { pages } = useContext(RouteContext);
    const [isVisible, setVisibility] = useState(false);
    const [screenSize, setScreenSize] = useState(0);

    // returns true if the navbar is in hamburger mode
    const [isHamburger, setHamburger] = useState(false);

    // runs when the screen size change
    useEffect(() => {
        // checks the width of the screen if it matches with the media max-width
        setHamburger(window.matchMedia("(max-width: 690px)").matches);
        window.addEventListener("resize", handleChangeScreen, { passive: true });

        return () => {
            window.removeEventListener("resize", handleChangeScreen);
        };
    }, [screenSize]);

    // gets the width of the screen
    const handleChangeScreen = () => {
        const size = window.innerWidth;
        setScreenSize(size);
    };

    // hides and show menu in hamburger menu mode
    const handleShowHideMenu = () => {
        setVisibility(prev => !prev);
    }

    return (
        <nav className="navbar">
            <button className="navbar__menuIcon" onClick={handleShowHideMenu}>
                <span><i className="fa-solid fa-bars"></i></span>
            </button>
            <ul className="navbar__list" style={{ display: isHamburger ? isVisible ? "block" : "none" : "block" }} >
                {pages.map(page => <li key={"navigation-item" + page.path}><NavLink onClick={handleShowHideMenu} className={({ isActive }) => isActive ? "active" : ""} to={page.path}>{page.name}</NavLink></li>)}
            </ul>
            <div className="navbar__overlay" style={{ display: isHamburger ? isVisible ? "block" : "none" : "none" }} onClick={handleShowHideMenu}></div>
        </nav>
    );
}

export default NavBar;