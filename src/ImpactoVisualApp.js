import React from 'react';
import { Provider } from 'react-redux';

import { Header } from './ImpactoVisualApp/Header';
import { store } from './store/store';
import { AppRouter } from './router/AppRouter';

export const ImpactoVisualApp = () => {
    return (
        <Provider store={ store }>
            <Header />
            <AppRouter />
        </Provider>
    )
}
