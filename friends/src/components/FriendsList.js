import React, {useState} from 'react';
import {axiosWithAuth} from "../axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);


    axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data);
        })

    return (
        <div>
            <h1>Congrats, dork! You have some friends.</h1>
            {friends.map(friend => {
                        return (
                            <p key={friend.id}>{friend.name} is {friend.age} years old and can be reached at {friend.email}</p>
                        )
                    })
                }
        </div>
    );
};

export default FriendsList;

