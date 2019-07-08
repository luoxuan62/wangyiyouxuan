import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "./static/iconfont/iconfont.css"
import "./static/js/flexble"

import {Provider} from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reducers from './redux/reducers'
import rootSaga from './redux/sagas'



const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>
    ,
    document.getElementById("root")
);


window.onbeforeunload = () => {
    const state = store.getState()
    localStorage.setItem('easyMarket_initData', JSON.stringify(state))
  }