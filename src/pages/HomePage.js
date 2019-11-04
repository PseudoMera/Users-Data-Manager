import React from 'react';
import {Sidebar} from '../components/Sidebar';

export const homePage = (props) => {
    return (
        <div className="home-container">
           <Sidebar 
           user={props.location.state.user} 
           profileLogo={props.location.state.profileLogo}/>
        </div>
    );
}