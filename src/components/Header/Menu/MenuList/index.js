import React from "react";
import list from "../../../../menuLinks";
import Brand from "../../Brand";

/*
* list = [ [{title, link}], [{title, link}], [{title, link}] ];
*/

const MenuList = ({hideMenu}) => {

    const MenuItems = () => list.map(arr => (
        <React.Fragment>
            <div className="menu-list-underline"/>
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
        <div className="menu-container"
             onClick={hideMenu}>
            <div className="menu-list-logo">
                <Brand/>
            </div>
            <div className="menu-container-block">
                <div className="menu-list">
                    <ul>
                        {MenuItems()}
                        <div className="menu-list-underline"/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuList;
