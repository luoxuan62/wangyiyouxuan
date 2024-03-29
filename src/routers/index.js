import{
    Home,
    Login,
    Cart,
    Sort,
    Topic,
    NotFound,
    Search
} from "@/views"



export const pageRoute = [
    {
        pathname:"/home",
        component:Home
    },
    {
        pathname:"/login",
        component:Login
    },
    {
        pathname:"/cart",
        component:Cart
    },
    {
        pathname:"/sort",
        component:Sort
    },
    {
        pathname:"/topic",
        component:Topic
    },
    {
        pathname:"/404",
        component:NotFound
    },
    {
        pathname:"/search",
        component:Search
    }
    
]
