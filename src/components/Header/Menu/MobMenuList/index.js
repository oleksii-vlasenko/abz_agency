import React from "react";
import list from "../../../../assets/data/mobMenuLinks";
import Brand from "../../Brand";

const MobMenuList = ({hideMenu}) => {

    const MenuItems = () => list.map(arr => (
        <React.Fragment>
            <div className="mob-menu-list-underline"/>
            {
                arr.map(item => (
                    <li>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))
            }
        </React.Fragment>
    ));

    return (
        <div className="mob-menu-container"
             onClick={hideMenu}>
            <div className="mob-menu-list-logo">
                <Brand/>
            </div>
            <div className="mob-menu-container-block">
                <div className="mob-menu-list">
                    <ul>
                        {MenuItems()}
                        <div className="mob-menu-list-underline"/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobMenuList;
