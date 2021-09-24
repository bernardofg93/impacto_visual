import React, { useState, useEffect } from 'react';
import { Notification } from './Notification';

export const FormInfoClient = (
    {
        handleSubmit,
        handleChangeInput,
        variant,
        textAlert,
        show,
        formValues,
        isEdit
    }
) => {

    console.log('====================================');
    console.log(isEdit);
    console.log('====================================');

    const { nameClient, email, tel, camp } = formValues;

    return (
        <div>
            <p
                className="title__form"
            >
                Introduce tu información
            </p>

            <Notification
                show={show}
                variant={variant}
                textAlert={textAlert}
                value={nameClient}
            />

            <form
                onChange={handleChangeInput}
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        className={`form-control form-control-sm`}
                        name="nameClient"
                        value={nameClient}
                    />
                </div>

                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        className={`form-control form-control-sm `}
                        name="email"
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        className={`form-control form-control-sm`}
                        name="tel"
                        value={tel}
                    />
                </div>

                <div className="form-group ">
                    <label>Nombre de campaña</label>
                    <input
                        type="text"
                        className={`form-control form-control-sm `}
                        name="camp"
                        value={camp}
                    />
                </div>

                <div className="form-group ">
                    <input
                        type="submit"
                        className={`btn btn-primary btn-sm`}
                        value={ `${isEdit ? 'Editar datos' : 'Ingresar datos'}` }
                    />
                </div>

            </form>
            <hr />

        </div>
    )
}