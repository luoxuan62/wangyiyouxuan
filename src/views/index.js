import Loadable from "react-loadable"
import Loading from "@/common/loading"
//路由懒加载
const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const Cart=Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})
const Sort=Loadable({
    loader:()=>import("./sort"),
    loading:Loading
})
const Topic=Loadable({
    loader:()=>import("./topic"),
    loading:Loading
})
const NotFound=Loadable({
    loader:()=>import("./NotFound"),
    loading:Loading
})
const Search=Loadable({
    loader:()=>import("./search"),
    loading:Loading
})

export{
    Home,
    Login,
    Cart,
    Sort,
    Topic,
    NotFound,
    Search
}