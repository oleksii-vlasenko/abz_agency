import React, {useEffect, useState} from "react";
import {getUsers} from "../../../services/user.service";
import UserCard from "./UserCard";


const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(6);
    const [isLastPage, setIsLastPage] = useState(false);

    useEffect(() => {
        let initCount = window.innerWidth < 768 ? 3 : 6;
        setCount(initCount);
        getUsers({page, count: initCount}).then(resp => resp.data)
            .then(data => {
                setUsers(prev => [...prev, ...data.users]);
                setPage(prev => prev + 1);
            });
    }, [])

    const addUsers = () => {
        getUsers({page, count}).then(resp => resp.data)
            .then(data => {
                setUsers(prev =>
                    [...prev, ...data.users]
                        .sort((a, b) =>
                            b.registration_timestamp - a.registration_timestamp
                        ));
                if (data.page === data.total_pages) {
                    setIsLastPage(true);
                    return;
                }
                setPage(prev => prev + 1);
            });
    };

    const rendUsers = () => {
        return users.map(user => <UserCard user={user}/>);
    };

    return (
        <div className="userspage-block">
            <h2 className="font-h2">Our cheerful users</h2>
            <p className="font-p">Attention! Sorting users by registration date</p>
            <div className="user-container">
                {users.length !== 0 && rendUsers()}
            </div>
            {!isLastPage && <button className="btn users-btn" onClick={addUsers}>Show more</button>}
        </div>
    );
};

export default UsersPage;
