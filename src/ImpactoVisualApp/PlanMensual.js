import React from 'react';
import {Buttons} from '../components/Buttons';

export const PlanMensual = () => {
    
    return (
        <>
            <div className="container__plan-mensual">
                <p className="title">Plan mensual</p>
                <p className="subtitle__plan-mensual">Selecciona tu paquete de preferencia.</p>
                <div className="card w-100">
                    <div className="card-body">
                        <div className="row">
                            <h5 className="card-title">PaqueTe Vean</h5>
                            <span>$15,000</span>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat
                        </p>
                    </div>
                </div>

                <div className="card w-100">
                    <div className="card-body">
                        <div className="row">
                            <h5 className="card-title">PaqueTe Vean</h5>
                            <span>$15,000</span>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat
                        </p>
                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-body">
                        <div className="row">
                            <h5 className="card-title">PaqueTe Vean</h5>
                            <span>$15,000</span>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat
                        </p>
                    </div>
                </div>
            </div>
            <div className="cont__plan-men">
                <Buttons 
                   firstLink="contrato"
                   firstName="Atrás"
                   secondLink="archivos"
                   secondName="Siguiente" 
                />
            </div>
        </>
    )
}