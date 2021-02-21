import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/userActions";
import styles from "./Register.module.scss";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            register({
                name,
                email,
                password,
            })
        );
    };

    return (
        <article className={styles.register}>
            <h1>Register User</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    onChange={(e) => setName(e.currentTarget.value)}
                    value={name}
                    type="text"
                    placeholder="Name"
                />
                <input
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                />
                <button type="submit">Store User</button>
            </form>
        </article>
    );
};

export default Register;
