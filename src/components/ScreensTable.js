import React from 'react';

export const ScreensTable = () => {

    const dataPantallaUno = {
        'name' : 'uno',
        'title' : 'dos',
        'service' : 'tres'
    }

    const test = () => {
        console.log(dataPantallaUno);
    }

    return (
        <>
            <p className="title__form">Pantallas disponibles</p>
            <p className="sb__title_table">Selecciona las pantallas donde se mostrará tu campaña.</p>
            <table className="table table-bordered table__info" align="center">
                <thead>
                    <tr>
                        <th scope="col" style={{ width: '40px' }}></th>
                        <th scope="col">Pantalla</th>
                        <th scope="col">Promedio Tráfico por hora</th>
                        <th scope="col">Hora más concurrida</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onClick={test}
                            />
                        </td>

                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                className="form-check-input"
                                type="checkbox"
                            />
                        </td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                className="form-check-input"
                                type="checkbox"
                            />
                        </td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}