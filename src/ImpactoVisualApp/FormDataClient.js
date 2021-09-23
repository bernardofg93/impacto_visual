import React, { useState } from 'react';
import { ScreensTable } from '../components/ScreensTable';
import { FormInfoClient } from '../components/FormInfoClient';
import { Buttons } from '../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { btnDisabled } from '../actions/ui';
import { getStateLocalStorage } from '../utils/localStorage';

export const FormDataClient = () => {

    let objStoraje = getStateLocalStorage();

    const { data } = objStoraje;

    const { list } = data;

    const editTask = list.map(val => {
        return {
            ...val
        }
    })

    console.log(editTask);

    let { disabled } = useSelector(state => state.btnDisabled);

    const dispatch = useDispatch();

    const [formValues, setformValues] = useState({
        nameClient: '',
        email: '',
        tel: '',
        camp: ''
    });


    const handleChangeInput = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    let { nameClient, email, tel, camp } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameClient === '' && email === '' && tel === '' && camp === '') {
            console.log('favor de llenar los datos');
        } else {
            dispatch(btnDisabled());
        }
    }

    return (

        <div className="data__contrat-cont">
            <div className="grid__contrat">
                <div>
                    <FormInfoClient
                        handleSubmit={handleSubmit}
                        formValues={formValues}
                        handleChangeInput={handleChangeInput}
                    />
                    <ScreensTable />
                    <div>
                        <p
                            className="title__form"
                        >
                            Escoge el plan
                        </p>
                    </div>
                    <Buttons
                        firstLink={'planPorDia'}
                        secondLink={'planMensual'}
                        firstName={'Por día'}
                        secondName={'Mensual'}
                        stateBtn={disabled}
                    />
                    <div className="bx__btn-next">
                        <button
                            className="btn btn-primary btn-sm"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}