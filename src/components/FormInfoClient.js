import React, { useState } from 'react';

export const FormInfoClient = () => {

    const [valInput, setValInput] = useState([{
        'name': '',
        'email': '',
        'tel': '',
        'camp': ''
    }]);

    const handleChangeInput = ({ target }) => {
        setValInput({
            ...valInput,
            [target.name]: target.value 
        })
    }

    const { name, email, tel, camp } = valInput;

    return (

        <div>
            <p className="title__form" >Introduce tu información</p>
            <form>
                <div className="form-group">
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={handleChangeInput}
                        value={name}
                        name="name"
                    />
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control form-control-sm"
                        id="exampleInputPassword1"
                        value={email}
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="exampleInputPassword1"
                        value={tel}
                        name="tel"
                    />
                </div>

                <hr />

                <div className="form-group ">
                    <label>Nombre de campaña</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        value={camp}
                        name="camp"
                    />
                </div>
            </form>
        </div>
    )
}