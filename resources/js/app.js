import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initApp } from "./store/actions/appActions";
import { Loader } from "./components";
import { Routes } from "./routes";

const App = () => {
    const dispatch = useDispatch();
    const appLive = useSelector(({ app }) => app.appLive);

    useEffect(() => {
        dispatch(initApp());
    }, []);

    if (appLive) {
        return <Routes />;
    } else {
        return <Loader />;
    }
};

export default App;
