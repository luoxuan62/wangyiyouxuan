import React,{Fragment} from "react"
import {NavLink} from "react-router-dom"
import "./index.css"
export default class Footer extends React.Component{
    render(){
        return(
            <Fragment>
            <div id="footer">
                <ul>
         
                    <li>
                        <NavLink to="/home">
                            <i className="iconfont">&#xe61b;</i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sort">
                            <i className="iconfont">&#xe634;</i>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/topic">
                            <i className="iconfont">&#xe65b;</i>
                            <span>识物</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <i className="iconfont">&#xe648;</i>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">
                            <i className="iconfont">&#xe680;</i>
                            <span>个人</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
            </Fragment>
        )
    }
}

