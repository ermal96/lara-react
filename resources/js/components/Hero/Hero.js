import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div>
                <h1>
                    Welcome to <br />
                    Lara <span>React</span>
                </h1>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not <br />
                    simply random text. It has roots in <br />a piece of
                    classical from 45 BC, making it
                    <br />
                    over 2000 years old.
                </p>
                <button>Learn More</button>
            </div>
            <img src="img/1.svg" />
        </section>
    );
};

export default Hero;
