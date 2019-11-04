import React from 'react';
import {Link} from 'react-router-dom';

export const Sidebar = (props) => {
    const {user, profileLogo} = props;
    

    return (
        <aside className="menu">
            <p className="menu-label">{user ? user : "No name"}</p>
            <img className="image" src={profileLogo} alt="user profile"/>

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
                <li>
                    <Link to="/home">
                    Add user
                    </Link>
                </li>

                <li>
                    <Link to="/home">
                    List of users
                    </Link>
                </li>

            </ul>
        </aside>
    );
}