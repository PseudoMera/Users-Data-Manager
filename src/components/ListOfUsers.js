import React from 'react';

export const ListOfUsers = (props) => {
    return (
        <div className="right-container second-useless-class is-hidden">
            {props.users.length > 0 ? 
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
            {props.users.map((user, index) =>
                    <tr key={Math.floor(Math.floor(100000) * Math.random())}>
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
           
        </div>
    );
}


// ID
// Nombre completo
// Correo electrónico
// Género