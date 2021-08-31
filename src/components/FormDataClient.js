import React from 'react';
import { ScreensTable } from './ScreensTable';
import { Link, useHistory  } from 'react-router-dom';

export const FormDataClient = () => {

    const handleChangeInput = (e) => {
        console.log(e.values);
    }

    const history = useHistory();

    const handleClick = (path) => {
        history.push(path)
    }

    return (
        <div className="data__contrat-cont">
            <div className="grid__contrat">

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
                            />
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control form-control-sm"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="form-group">
                            <label>Teléfono</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="exampleInputPassword1"
                            />
                        </div>

                        <hr />

                        <div className="form-group ">
                            <label>Nombre de campaña</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                            />
                        </div>
                    </form>
                </div>

                <div>
                    <ScreensTable />
                    <div>
                        <p className="title__form" >Escoge el plan</p>
                    </div>

                    <div className="container__btns-info">
                        <button
                            className="btn btn-primary btn-sm"
                            to="/planMensual" renderAs={Link}
                            onClick={() => handleClick("planPorDia")}
                        >Por día
                        </button>

                        <button
                            className="btn btn-primary btn-sm"
                            to="/planMensual" renderAs={Link}
                            onClick={() => handleClick("planMensual")}                        >
                            Mensual
                        </button>
                    </div>
                    <div className="bx__btn-next">
                        <button className="btn btn-primary btn-sm">Siguiente</button>
                    </div>
                </div>

            </div>
        </div>
    )
}