import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <p>loading...</p>
        </div>
    );
};

export default Loader;
