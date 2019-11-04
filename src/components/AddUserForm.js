import React from 'react';

export const AddUser = () => {
    return (
        <div className="right-container">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Name"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Surname</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Surname"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Last name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Last name"/>
                </div>
            </div>
        </div>
    );
}


// Nombres
// Primer apellido
// Segundo apellido
// Cédula
// Edad
// Género
// Dirección(Se debe permitir agregar multiples direcciónes)
// Teléfono
// Correo electrónico
// Estado civil
// Tienes hijos?
// Fecha de nacimiento