import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/userActions";
import styles from "./Register.module.scss";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const errors = useSelector(({ user }) => user.errors);

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
                <div>
                    <input
                        onChange={(e) => setName(e.currentTarget.value)}
                        value={name}
                        type="text"
                        placeholder="Name"
                    />
                    {errors.name
                        ? errors.name.map((error) => <p>{error}</p>)
                        : null}
                </div>
                <div>
                    <input
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        value={email}
                        type="text"
                        placeholder="Email"
                    />
                    {errors.email
                        ? errors.email.map((error) => <p>{error}</p>)
                        : null}
                </div>
                <div>
                    <input
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                    />
                    {errors.password
                        ? errors.password.map((error) => <p>{error}</p>)
                        : null}
                </div>
                <button type="submit">Store User</button>
            </form>
        </article>
    );
};

export default Register;
