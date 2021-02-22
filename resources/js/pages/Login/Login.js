import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { login } from "../../store/actions/userActions";
import styles from "./Login.module.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const errors = useSelector(({ user }) => user.errors);
    const loading = useSelector(({ user }) => user.loading);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                email,
                password,
            })
        );
    };

    return (
        <article className={styles.login}>
            <h1>Login Here</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={errors.email ? styles.error : ""}>
                    {errors.email
                        ? errors.email.map((error) => <span>{error}</span>)
                        : null}
                    <input
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        value={email}
                        type="text"
                        placeholder="Email"
                    />
                </div>
                <div className={errors.password ? styles.error : ""}>
                    {errors.password
                        ? errors.password.map((error) => <span>{error}</span>)
                        : null}
                    <input
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <button type="submit" disabled={loading ? true : false}>
                    <span>Login</span>
                    {loading ? <Spinner /> : null}
                </button>
            </form>
        </article>
    );
};

export default Login;
