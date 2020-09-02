import React from "react";
import list from "../../../../assets/data/descMenuLinks";

const DescMenuList = () => {

    const MenuItems = () => list.map(item => (
        <React.Fragment>
            <li>
                <a href={item.link}>{item.title}</a>
            </li>
        </React.Fragment>
    ));

    return (
        <div className="desc-menu-container-block">
            <ul>
                {MenuItems()}
            </ul>
        </div>
    );
};

export default DescMenuList;
