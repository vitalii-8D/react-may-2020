import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { UserCard } from '../user-card/UserCard';

 const UserPageComponent = (props) => {
    const { match: { params: { userId } }, history, usersList } = props;
    console.log(usersList)
    console.log(userId)
    const user = usersList.find(item => item.id === userId);
    const toUsersList = () => {
        history.push('/users');
    };
    const toHomePage = () => {
        history.push('/home');
    };
    // debugger
    return (
        <div>
            <button className="btn btn-primary m-2" type="button" onClick={toUsersList}> Go back to users list</button>
            <button className="btn btn-primary m-2" type="button" onClick={toHomePage}> Go back to homepage</button>
            {
                !!user && (
                    <UserCard user={user}/>
                )
            }
        </div>
    );
};

export const UserPage = withRouter(UserPageComponent);