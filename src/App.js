import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Routes from './routes';
import store from './store';

import GlobalStyles from './styles/global'

const App = () => (
    <Provider store={store}>
        <Fragment>
            <Routes />
            <ReduxToastr />
            <GlobalStyles />
        </Fragment>

    </Provider>
);

export default App;
