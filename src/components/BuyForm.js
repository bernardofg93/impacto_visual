import React from 'react';

export const BuyForm = () => {

    return (

        <div className="buy__form">
            <form>
                <div className="form-group">
                    <label>Razón social</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="name"
                    />
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label>RFC</label>
                    <input
                        type="email"
                        className="form-control form-control-sm"
                        id="exampleInputPassword1"
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label>Dirección fiscal</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="exampleInputPassword1"
                        name="tel"
                    />
                </div>

                <div className="form-group ">
                    <label>Tipo de factura</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        name="camp"
                    />
                </div>
            </form>
        </div>
    )
}