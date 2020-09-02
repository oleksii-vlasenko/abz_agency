import React from "react";
import Brand from "./Brand";
import Menu from "./Menu";

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <Brand/>
                <Menu/>
            </div>
        </React.Fragment>
    );
};

export default Header;
