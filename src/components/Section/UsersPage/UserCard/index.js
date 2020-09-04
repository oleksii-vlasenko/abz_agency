import React, {useEffect, useState} from "react";

const UserCard = ({user}) => {

    const phoneNumber = user.phone.substr(0, 4) + " "
        + user.phone.substr(4, 2) + " "
        + user.phone.substr(6, 3) + " "
        + user.phone.substr(9, 2) + " "
        + user.phone.substr(11, 2);

    return (
        <div className="usercard">
            <div className="user-photo"/>
            <div className="user-name">{user.name}</div>
            <div className="user-position">{user.position}</div>
            <div className="user-email">{user.email}</div>
            <div className="user-phone">{phoneNumber}</div>
        </div>
    );
};

export default UserCard;
