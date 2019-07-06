import React,{Component} from "react"
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import {pageRoute} from "@/routers"
import Footer from "@/common/Footer/index"

export default class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    {
                    pageRoute.map((item,index)=>{
                        return <Route path={item.pathname} key={index} render={({history})=>{
                            return <item.component history={history}/>
                        }}/>
                    })
                    }
                    <Redirect from="/" exact to="/home"/>
                    <Redirect from="**" to="/404"/>
                </Switch>
                <Footer/>
        </Router>
        )
    }
}