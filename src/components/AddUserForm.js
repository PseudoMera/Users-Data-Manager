import React from 'react';
import { User } from '../Classes/User';

export const AddUser = (props) => {
    

    return (
        <div className="right-container useless-class is-hidden">
            <h1 className="title">Add user form</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Albin"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Surname</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Frias"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Last name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Rojas"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Identification card</label>
                <div className="control">
                    <input className="input" type="text" placeholder="1-1111111-1"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Gender</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Male"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Age</label>
                <div className="control">
                    <input className="input" type="number" placeholder="18"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Address</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Santo Domingo"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                    <input className="input" type="tel" placeholder="+1-202-555-0171"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="text" placeholder="fakeemail@fake.com"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Civil status</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Married"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Do you have children?</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Yes"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Birthday</label>
                <div className="control">
                    <input className="input" type="date" placeholder="01/01/1996"/>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    
                    <button className="button is-link"
                    onClick={
                        () => {
                            let values = document.getElementsByClassName("input");
                            console.log(values)
                            let user = new User();
                            user.name = values[0].value;
                            user.surname = values[1].value;
                            user.lastname = values[2].value;
                            user.identification = values[3].value;
                            user.gender = values[4].value;
                            user.age =  values[5].value;
                            user.address = values[6].value;
                            user.phone = values[7].value;
                            user.email = values[8].value;
                            user.civilStatus = values[9].value;
                            user.hasChilds = values[10].value;
                            user.birthday = values[11].value;
                            props.addUser(user);
                            for(let i in values) {
                                if(isNaN(i)) break; 
                                values[i].value = '';
                            }
                            document.getElementsByClassName("useless-class")[0].classList.toggle("is-hidden");
                            document.getElementsByClassName("second-useless-class")[0].classList.toggle("is-hidden");
                        }
                    }>Save</button>
                </div>
            </div>
        </div>
    );
}