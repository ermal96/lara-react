import React from "react";
import styles from "./Spinner.module.scss";

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
