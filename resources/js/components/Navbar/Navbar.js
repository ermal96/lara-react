import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { paths } from "../../routes/paths";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <NavLink exact to={paths.home}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to={paths.about}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to={paths.blog}>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to={paths.contact}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
