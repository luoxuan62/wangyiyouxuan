import React,{Component} from "react"
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import {pageRoute} from "./routers"
import Footer from "./common/Footer/index"
// import {Provider} from "react-redux"
// import store from "./store"
export default class App extends Component{
    render(){
        return(
            // <Provider store = {store}>
                <Router>
                    <Switch>
                        {
                        pageRoute.map((item,index)=>{
                            return <Route path={item.pathname} key={index} render={()=>{
                                return <item.component/>
                            }}/>
                        })
                        
                        }
                        <Redirect from="/" exact to="/home"/>
                        <Redirect from="**" to="/404"/>
                    </Switch>
                    <Footer/>
                </Router>
            // </Provider>
        )
    }
}