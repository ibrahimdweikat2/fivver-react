import React from 'react'
import ReactDOM from 'react-dom/client'

import reducer from './reducer'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import App from './App'
import './index.scss'

const store=createStore(reducer,compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
