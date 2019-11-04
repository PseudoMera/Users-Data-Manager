import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import avatar1 from '../images/avatar1.svg';
import avatar2 from '../images/avatar2.svg';

export const Signin = () => {
    const [user, setUser] = useState(null);
    const avatars = [
        avatar1,
        avatar2
    ];

    const profileLogo = avatars[Math.floor(Math.floor(2) * Math.random())];

    const handleChangeUser = (event) => {
        setUser(event.target.value);
    }

    return (
        <div className="container">
            <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="Username" onChange={handleChangeUser}/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                    <input className="input" type="password" placeholder="*****"/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <Link 
                    to={{
                        pathname:"/home",
                        state: {
                            user,
                            profileLogo
                        }
                        }}>
                        <button className="button is-link signin-button">Enter</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}