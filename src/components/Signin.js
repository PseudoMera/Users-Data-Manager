import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export const Signin = () => {
    const [user, setUser] = useState(null);
    const avatars = [
        "https://avataaars.io/?hairColor=BrownDark&clotheType=Hoodie&avatarStyle=Circle",
        "https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=UnibrowNatural&facialHairType=BeardLight&hairColor=Black&mouthType=Eating&skinColor=Yellow&topType=LongHairShavedSides",
        "https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Black&clotheType=GraphicShirt&eyeType=Close&eyebrowType=Default&facialHairColor=BlondeGolden&facialHairType=Blank&hairColor=PastelPink&mouthType=Sad&skinColor=Tanned&topType=Hat"
    ];

    const profileLogo = avatars[Math.floor(Math.random() * Math.floor(3))];

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