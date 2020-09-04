import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UsersPage from "./UsersPage";
import RegisterPage from "./RegisterPage";

const Section = () => {
    return(
        <React.Fragment>
            <HomePage />
            <AboutPage />
            <UsersPage />
            <RegisterPage />
        </React.Fragment>
    );
};

export default Section;
