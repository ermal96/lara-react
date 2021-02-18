import React from "react";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.layout}>{children}</main>
        </>
    );
};

export default Layout;
