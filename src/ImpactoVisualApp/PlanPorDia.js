import React from 'react';
import { Buttons } from '../components/Buttons';
import { CalendarRange } from '../components/CalendarRange';
import { PickerTime } from '../components/PickerTime';


export const PlanPorDia = () => {

    return (
        <>
            <div className="title__time">
                <p className="title">
                    Plan por día
                </p>
                <p className="subtitle__plan-mensual">
                    Selecciona las fechas de actividad de tu campaña.
                </p>
            </div>
            <div className="calendar__cont">
                <CalendarRange />
                <PickerTime />
            </div>
            <div style={{ padding: "1rem" }}>
                <Buttons
                    firstName="Atrás"
                    secondName="Siguiente"
                    firstLink="contrato"
                    secondLink="archivos"
                />
            </div>
        </>
    )
}