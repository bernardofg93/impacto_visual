import React from 'react';

export const FormInfoClient = (
    {
        handleSubmit,
        handleChangeInput
    }
) => {

    return (
        <div>
            <p
                className="title__form"
            >
                Introduce tu información
            </p>

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
                    />
                </div>

                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        className={`form-control form-control-sm `}
                        name="email"
                    />
                </div>

                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        className={`form-control form-control-sm`}
                        name="tel"
                    />
                </div>

                <div className="form-group ">
                    <label>Nombre de campaña</label>
                    <input
                        type="text"
                        className={`form-control form-control-sm `}
                        name="camp"
                    />
                </div>

                <div className="form-group ">
                    <input
                        type="submit"
                        className={`btn btn-primary btn-sm`}
                        name="camp"
                        value="Ingresar datos"
                    />
                </div>

            </form>
            <hr />
        </div>
    )
}