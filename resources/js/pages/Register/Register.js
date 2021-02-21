import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { register } from "../../store/actions/userActions";
import styles from "./Register.module.scss";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const errors = useSelector(({ user }) => user.errors);
    const loading = useSelector(({ user }) => user.loading);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            register({
                name,
                email,
                password,
                password_confirmation: confirmPassword,
            })
        );
    };

    return (
        <article className={styles.register}>
            <h1>Create Your Account</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={errors.name ? styles.error : ""}>
                    {errors.name
                        ? errors.name.map((error) => <span>{error}</span>)
                        : null}
                    <input
                        onChange={(e) => setName(e.currentTarget.value)}
                        value={name}
                        type="text"
                        placeholder="Name"
                    />
                </div>
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

                <div>
                    <input
                        onChange={(e) =>
                            setConfirmPassword(e.currentTarget.value)
                        }
                        value={confirmPassword}
                        type="password"
                        placeholder="Confirm password"
                    />
                </div>

                <button type="submit" disabled={loading ? true : false}>
                    <span>Register</span>
                    {loading ? <Spinner /> : null}
                </button>
            </form>
        </article>
    );
};

export default Register;
