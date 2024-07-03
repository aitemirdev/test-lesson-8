import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RegistrationForm from './RegistrationForm';

const App = () => {
    return (
        <Provider store={store}>
            <RegistrationForm />
        </Provider>
    );
};


export default App;