import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheckTrue, statusCheckFalse } from '../actions/data';

export const ScreensTable = () => {

    const dispatch = useDispatch();

    const { list } = useSelector(state => state.data);

    const [stateCheck, setStateCheck] = useState([]);

    const isChecked = (value) => {

        //Valor del check seleccionado
        const currentIndex = stateCheck.indexOf(value);
        //Estate del estado
        const newChecked = [...stateCheck];
        //Busca en el estorage si esta en true o en false 
        const checkStorage = list.find(res => res.id === value);
        //Comprueba si esta 
        if (checkStorage.state === true) {
            newChecked.splice(currentIndex, 1);
            dispatch(statusCheckFalse(value));
            setStateCheck(newChecked);
        } else {
            newChecked.push(value);
            dispatch(statusCheckTrue(value));
        }
        setStateCheck(newChecked);
    }

    return (
        <>
            <p className="title__form">
                Pantallas disponibles
            </p>
            <p className="sb__title_table">
                Selecciona las pantallas
                donde se mostrará tu campaña.
            </p>
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

                    {
                        list.map((el, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={el.name}
                                        name="p1"
                                        onChange={() => isChecked(el.id)}
                                        checked={el.state}
                                    />
                                </td>
                                <td>{el.name}</td>
                                <td>{el.name}</td>
                                <td>{el.name}</td>
                            </tr>

                        ))
                    }


                </tbody>
            </table>
        </>
    );
}