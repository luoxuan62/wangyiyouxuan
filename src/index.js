import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "./static/iconfont/iconfont.css"
import "./static/js/flexble"
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)