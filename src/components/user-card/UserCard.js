import React from 'react';


function UserCard(props) {
    const {user} = props;
    const {first_name, last_name, email, address, _links} = user;
    const person = first_name + " " + last_name;
    console.log(user);

    const personalId = "user"+props.num;
    return (
        <div className='may-user-card card' id={personalId}>
            <img src="https://via.placeholder.com/250" alt={person} className='may-user-card-avatar rounded-circle'/>
            <div className="card-body">
                <h4 className='card-title'>{person}</h4>
                <div className="card-text">
                    <div className="email">{email}</div>
                    <div className="address">{address}</div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;