import React from 'react';
import {Link} from 'react-router-dom';

export const Sidebar = (props) => {
    const {user, profileLogo} = props;
    

    return (
        <aside className="menu">
            <p className="menu-label">{user ? user : "No name"}</p>
            <img className="image" src={profileLogo} alt="user profile"/>
            <ul className="menu-list">
                <li>
                    <Link>
                    Add user
                    </Link>
                </li>
                <li>
                    <Link>
                    List of users
                    </Link>
                </li>
            </ul>
        </aside>
    );
}