import React, {useState} from "react";
import menu_icon from "../../../assets/images/menu icon.svg";
import MenuList from "./MenuList";

const Menu = () => {

    const [show, setShow] = useState(false);

    const setShowMenu = () => {
        setShow(prev => !prev);
    }

    return (
        <React.Fragment>
            <div className="menu-btn"
                 onClick={setShowMenu}>
            </div>
            {
                show && <MenuList hideMenu={setShowMenu}/>
            }
        </React.Fragment>
    );
};

export default Menu;
