import React from "react"
import "./index.css"
import {newitemlistAsync} from "@/action/home"
import store from "@/store"
import {connect} from "react-redux"
import {
    InputVa,
    InputCel
} from "@/action/search"
class Search extends React.Component{
    render(){ 
        let {newitem,inputSearch,flag,fla}=this.props;
        console.log(newitem[0])
        return(
            <div className="search">
                <div className="search_t">
                    <input results="s"
                     type="search"
                     size="30px" 
                     placeholder="水感多效防晒凝露"
                     value={inputSearch}
                     onChange={this.props.InputVal.bind(this)}  />
                    <span onClick={this.props.handleCancel.bind(this)}>取消</span>
                </div>
                <div className="search_list" style={{display:flag?"block":"none"}}>
                    {
                        newitem.map(item=>(
                            <p key={item.id}>{item.name}</p>
                        ))
                    }
                </div>
                
                <div style={{display:fla?"block":"none"}}>
                    <p>热门搜索</p>
                    <ul>
                        {
                            newitem.map(item=>(
                                <li key={item.id}><a href="#">{item.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        store.dispatch(newitemlistAsync())
    }
    
}
const mapStateToProps=(state)=>({
    newitem:state.search.newitem,
    inputSearch:state.search.inputSearch,
    flag:state.search.flag,
    fla:state.search.fla

})
const mapDispatchToProps = (dispatch)=>({
    InputVal(e){
        let val=e.target.value
        dispatch(InputVa(val))
    },
    handleCancel(){
        dispatch(InputCel())
        this.props.history.push("/home")
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Search)