import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const PlanMensual = () => {
    
    const history = useHistory();

    const handleClick = (path) => {
        history.push(path)
    }

    return (
        <>
            <div className="container__plan-mensual">
                <p className="title">Plan mensual</p>
                <p className="subtitle__plan-mensual">Selecciona tu paquete de preferencia.</p>
                <div class="card w-100">
                    <div class="card-body">
                        <div class="row">
                            <h5 class="card-title">PaqueTe Vean</h5>
                            <span>$15,000</span>
                        </div>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat
                        </p>
                    </div>
                </div>

                <div class="card w-100">
                    <div class="card-body">
                        <div class="row">
                            <h5 class="card-title">PaqueTe Vean</h5>
                            <span>$15,000</span>
                        </div>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat
                        </p>
                    </div>
                </div>
                <div class="card w-100">
                    <div class="card-body">
                        <div class="row">
                            <h5 class="card-title">PaqueTe Vean</h5>
                            <span>$15,000</span>
                        </div>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat
                        </p>
                    </div>
                </div>
            </div>
            <div className="cont__plan-men">
                <div className="btns__plan-men">
                    <button
                        className="btn btn-primary btn-md"
                        to="/contrato" renderAs={Link}
                        onClick={() => handleClick("contrato")}   
                    >
                        Atrás
                    </button>
                    <button
                        className="btn btn-md btn-next"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    )
}