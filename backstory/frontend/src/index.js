import './index.css';

import App from './App';
import { Auth0ProviderWithNavigate } from './auth/Auth0ProviderWithNavigate';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>            
            <Auth0ProviderWithNavigate>
                <Provider store={store}>
                    <App />
                </Provider>
            </Auth0ProviderWithNavigate>
        </BrowserRouter>
    </React.StrictMode>
);
