import React from 'react';
import {Link} from 'react-router-dom';

export const Sidebar = (props) => {
    const {user, profileLogo} = props;
    

    return (
        <aside className="menu">
            <p className="menu-label">{user ? user : "No name"}</p>
            <Link to={{
                pathname:"/home",
                state: {
                    user,
                    profileLogo
                }
            }}>
                <img className="image" src={profileLogo} alt="user profile"/>
            </Link>
            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button" 
                    aria-haspopup="true" 
                    aria-controls="dropdown-menu"
                    onClick={() => {
                        let dd = document.getElementsByClassName("dropdown")[0];
                        dd.classList.toggle("is-active");
                    }}>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>

                </div>

                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="/" className="dropdown-item">
                            Signout
                        </a>
                    </div>
                </div>
            </div>
            <hr/>

            <ul className="menu-list">
                <li onClick={
                    () => {
                        let addContainer = document.getElementsByClassName("useless-class")[0];
                        addContainer.classList.toggle("is-hidden");
                        let temp = document.getElementsByClassName("second-useless-class")[0];
                        if(temp.className[37] !== 'i') {
                            temp.classList.toggle("is-hidden");
                        }
                    }
                }>
                    Add user
                </li>

                <li onClick={() => {
                    let listContainer = document.getElementsByClassName("second-useless-class")[0];
                    listContainer.classList.toggle("is-hidden");
                    let temp = document.getElementsByClassName("useless-class")[0];
                    if(temp.className[30] !== 'i') {
                        temp.classList.toggle("is-hidden");
                    }
                }}>
                    List of users
                </li>
            </ul>
        </aside>
    );
}