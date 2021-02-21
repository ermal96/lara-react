import React from "react";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { paths } from "../../routes/paths";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>
                <Link to={paths.home}>LARA REACT</Link>
            </h2>
            <Navbar />
        </header>
    );
};

export default Header;
