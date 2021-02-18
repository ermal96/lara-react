import React from "react";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>LARA REACT</h2>
            <Navbar />
        </header>
    );
};

export default Header;
