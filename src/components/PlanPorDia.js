import React from 'react';
import { CalendarRange } from './CalendarRange';
import { TimeRangepicker } from './TimeRangePicker';

export const PlanPorDia = () => {

    return (
        <div className="calendar__cont">
            <p className="title">
                Plan por día
            </p>
            <p className="subtitle__plan-mensual">
                Selecciona las fechas de actividad de tu campaña.
            </p>

            <CalendarRange />
            <TimeRangepicker />
            
        </div>
    )
}