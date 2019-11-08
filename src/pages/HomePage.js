import React, {useState} from 'react';
import {Sidebar} from '../components/Sidebar';
import {AddUser} from '../components/AddUserForm';
import {ListOfUsers} from '../components/ListOfUsers';

export const HomePage = (props) => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState(5);

    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


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
           <ListOfUsers paginate={paginate} users={currentUser} userPerPage = {userPerPage} totalUsers={users.length}/>
        </div>
    );
}