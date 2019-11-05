import React, {useState} from 'react';
import {Sidebar} from '../components/Sidebar';
import {AddUser} from '../components/AddUserForm';
import {ListOfUsers} from '../components/ListOfUsers';

export const HomePage = (props) => {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        let arr = [];
        for(let user in users) arr.push(users[user])
        arr.push(user);
        setUsers(arr);
    }

    return (
        <div className="home-container">
           <Sidebar 
           user={props.location.state.user} 
           profileLogo={props.location.state.profileLogo}/>
           <AddUser addUser = {addUser}/>
           <ListOfUsers users={users}/>
        </div>
    );
}