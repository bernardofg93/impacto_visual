import React from 'react';
import { Link } from 'react-router-dom';

export const Buttons = (
    {
        firstLink,
        secondLink,
        firstName,
        secondName,
        stateBtn
    }) => {

        
    const disabledLink = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container__btns-info">
            <Link
                className={`${ stateBtn  ? `btn btn-primary btn-sm disabled` : `btn btn-primary btn-sm`}`}
                to={firstLink}
                onClick={disabledLink}
            >

                {firstName}
            </Link>

            <Link
                className={ `${ stateBtn  ? `btn btn-primary btn-sm disabled` : `btn btn-primary btn-sm`}`}
                to={secondLink}
            >
                {secondName}
            </Link>
        </div>
    )
}