import{
    Home,
    Login,
    Cart,
    Sort,
    Topic,
    NotFound
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
    }
]
