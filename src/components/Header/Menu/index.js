import React, {useState} from "react";
import MobMenuList from "./MobMenuList";
import DescMenuList from "./DescMenuList";


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
                show && <MobMenuList hideMenu={setShowMenu}/>
            }
            <DescMenuList />


        </React.Fragment>
    );
};

export default Menu;
