import React, { useState, useEffect } from 'react';
import { ScreensTable } from '../components/ScreensTable';
import { FormInfoClient } from '../components/FormInfoClient';
import { Buttons } from '../components/Buttons';
import { useLocalStorage } from '../utils/useLocalStorage';
import { getStateLocalStorage } from '../utils/localStorage';

export const FormDataClient = () => {

    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState("");
    const [textAlert, setTextAlert] = useState("");
    const [storage, setStorage] = useLocalStorage("dataClient", "");
    const [isEdit, setisEdit] = useState(false);

    let dataClientDb = getStateLocalStorage('dataClient');
    let data;
    dataClientDb.forEach(element =>(data = element));

    const [formValues, setformValues] = useState({
        nameClient: isEdit ? data.nameClient : '',
        email: isEdit ? data.email : '',
        tel: isEdit ? data.tel : '',
        camp: isEdit ? data.camp : ''
    });

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 3800)
    }, [show])

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
            setShow(true);
            setVariant("danger");
            setTextAlert("datos erroneos");
        } else {
            let arrayDb = [];

            if (formValues) {
                arrayDb.push(formValues);
                setStorage(arrayDb);
                setisEdit(true);
            }
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
                        textAlert={textAlert}
                        variant={variant}
                        show={show}
                        isEdit={isEdit}
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