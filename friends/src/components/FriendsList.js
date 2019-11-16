import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    const [newFriend, setNewFriend] = useState({id: 0, name: "", age: "", email: ""});

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data);
            })
}, [friends]);

    const handleChange = e => {
        setNewFriend({...newFriend, id: friends.length + 1, [e.target.name]: e.target.value});
        console.log(newFriend);
    }

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                setNewFriend({id: 0, name: "", age: "", email: ""});
            })
    }

    return (
        <div>
            <h1>Congrats, dork! You have some friends.</h1>
            <ul>
                {
                    friends.map(friend => {
                        return (
                            <li key={friend.id}>{friend.name} is {friend.age} years old and can be reached
                                at {friend.email}</li>
                        )
                    })

                }
            </ul>
            <h2>Have you made any new friends since the last time? Add them here!</h2>
            <form onSubmit={addFriend}>
                Friend Name: <input type="text" name="name" value={newFriend.name} onChange={handleChange}/>
                Friend Age (Just Put Numerals): <input type="number" name="age" value={newFriend.age}
                                                       onChange={handleChange}/>
                Friend Email: <input type="email" name="email" value={newFriend.email} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FriendsList;

