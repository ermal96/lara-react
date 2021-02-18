import React from "react";
import styles from "./Services.module.scss";

const Services = () => {
    return (
        <section className={styles.services}>
            <h1>Services</h1>
            <div className={styles.wrapper}>
                <div className={styles.firstCard}>
                    <h3>Who are we</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                    </p>
                </div>
                <div className={styles.card}>
                    <img src="img/2.svg" />
                    <h3>Why do we use it?</h3>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using
                    </p>
                </div>
                <div className={styles.card}>
                    <img src="img/3.svg" />
                    <h3>Where does it come from?</h3>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old
                    </p>
                </div>
                <div className={styles.card}>
                    <img src="img/4.svg" />
                    <h3>Where can I get some?</h3>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
