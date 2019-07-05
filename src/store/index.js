import {createStore,combineReducers,applyMiddleware} from "redux";
import home from "./reducer/home"
import reduxThunk from "redux-thunk"
const reducer = combineReducers({
    home
})
const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;