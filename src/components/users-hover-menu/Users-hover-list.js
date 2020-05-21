import React from "react";
import './Users-hover-list.scss'


export const UsersHoverList = function (props) {
    const {users} = props;
    return (
        <div className='users-menu'>
            {
                users.map(function (val,num) {
                    return (<a href={'#user'+num} key={num} className="users-menu-item">{val.first_name + " " + val.last_name}</a>)
                })
            }
        </div>
    )
}