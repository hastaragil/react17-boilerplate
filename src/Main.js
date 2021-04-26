import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "./utils/useStore";
import { MainRoutes } from "./routes";
import "./custom.less";
// import "./Style.css";
import ParticlesBg from "particles-bg";

export const Main = () => {
    return (
        <StoreProvider>
            <Router>
                <MainRoutes />
                <ParticlesBg color={"#ababab"} num={20} type={"cobweb"} bg={true} />
            </Router>
        </StoreProvider>
    );
};
