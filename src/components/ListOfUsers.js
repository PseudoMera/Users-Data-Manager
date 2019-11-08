import React from 'react';
import {Pagination} from '../components/Pagination';


export const ListOfUsers = (props) => {
    const {users, userPerPage, totalUsers, paginate} = props;

    

    return (
        <div className="right-container second-useless-class is-hidden">
        <h1 className="title">List of users</h1>
            {users.length > 0 ? 
         <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
            {users.map((user, index) =>
                    <tr key={Math.floor(Math.floor(Infinity) * Math.random())}>
                        <th>{index}</th>
                        <td>{`${user.name} ${user.surname} ${user.lastname}`}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                    </tr>
            )}
                </tbody>
            </table> 
            : <h1 className="title">You have no users at this moment</h1>   
        }

            <Pagination userPerPage = {userPerPage} totalUsers={totalUsers} paginate={paginate}/>       
        </div>
    );
}


// ID
// Nombre completo
// Correo electrónico
// Género