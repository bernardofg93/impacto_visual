import React from 'react';
import { ScreensTable } from '../components/ScreensTable';
import { FormInfoClient } from '../components/FormInfoClient';
import { Buttons } from '../components/Buttons';

export const FormDataClient = () => {

    return (

        <div className="data__contrat-cont">
            <div className="grid__contrat">
                <div>
                    <FormInfoClient />
                    <ScreensTable />
                    <div>
                        <p className="title__form" >Escoge el plan</p>
                    </div>
                    <Buttons
                        firstLink={'planPorDia'}
                        secondLink={'planMensual'}
                        firstName={'Por día'}
                        secondName={'Mensual'}
                    />
                    <div className="bx__btn-next">
                        <button className="btn btn-primary btn-sm">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>

    )
}