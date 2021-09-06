import React from 'react';
import { Link} from 'react-router-dom';

export const Buttons = ({ firstLink, secondLink, firstName, secondName }) => {

    return (
        <div className="container__btns-info">

            <Link
                className="btn btn-primary btn-sm"
                to={firstLink}
            >
                {firstName}
            </Link>

            <Link
                className="btn btn-primary btn-sm"
                to={secondLink}
            >
                {secondName}
            </Link>
        </div>
    )
}