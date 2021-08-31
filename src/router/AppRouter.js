import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Home } from '../components/Home';
import { FormDataClient } from '../components/FormDataClient';
import { PlanMensual } from "../components/PlanMensual";
import { PlanPorDia } from "../components/PlanPorDia";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contrato" component={FormDataClient} />
                    <Route exact path="/planMensual" component={PlanMensual} />
                    <Route exact path="/planPorDia" component={PlanPorDia} />
                </Switch>
            </div>
        </Router>
    )
}