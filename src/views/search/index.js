import React from "react"
import "./index.css"
import {catehotsellAsync} from "@/action/home"
import store from "@/store"
import {connect} from "react-redux"
class Search extends React.Component{
    render(){
        
        let {hot}=this.props;
        console.log(hot)
        return(
            <div className="search">
                <div className="search_t">
                    <input results="s" type="search" size="30px" placeholder="水感多效防晒凝露" value={inputSearch}  />
                    <span>取消</span>
                </div>
                <p>热门搜索</p>
                <ul>
                    <li><a href="#">变身发的郭水杯</a></li>
                    <li><a href="#">变身gfn水杯</a></li>
                    <li><a href="#">变身杯</a></li>
                    <li><a href="#">变身水杯</a></li>
                    <li><a href="#">变身水杯</a></li>
                    <li><a href="#">变身水杯</a></li>
                    <li><a href="#">变身水杯</a></li>
                    <li><a href="#">变身水杯</a></li>
                    <li><a href="#">变身水杯</a></li>
                    <li><a href="#">变身水杯</a></li>
                </ul>
            </div>
        )
    }
    componentDidMount(){
        store.dispatch(catehotsellAsync())
    }
}
const mapStateToProps=(state)=>({
    hot:state.home.hot
})

export default connect(mapStateToProps,null)(Search)