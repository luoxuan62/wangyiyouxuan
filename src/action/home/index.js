import {
    bannerlist,
    catelist,
    activitylist,
    tagList,
    catehotsell,
    popularlist,
    flashsale,
    newitemlist,
    shoppingguide,
    topcatelist,
    temlist
} from "@/api/home"

const banner=(val)=>({
    type:"BANNER_LIST",
    value:val
})
const cate=(val)=>({
    type:"CATE_LIST",
    value:val
})
const activity=(val)=>({
    type:"ACTIVITY_LIST",
    value:val
})
const tag=(val)=>({
    type:"TAG",
    value:val
})
const hot=(val)=>({
    type:"HOT",
    value:val
})
const popular=(val)=>({
    type:"POPULAR",
    value:val
})
const flash=(val)=>({
    type:"FLASH",
    value:val
})
const newitem=(val)=>({
    type:"NEW_ITEM",
    value:val
})
const shopping=(val)=>({
    type:"SHOPPING",
    value:val
})
const topcate=(val)=>({
    type:"TOPCATE",
    value:val
})
const tem=(val)=>({
    type:"TEM_LIST",
    value:val
})
export const bannerlistAsync=()=>{
    return async (dispatch)=>{
        let data=await bannerlist();
        dispatch(banner(data.data))
    }
}
export const catelistAsync=()=>{
    return async (dispatch)=>{
        let data=await catelist();
        dispatch(cate(data.data.kingKongList))
    }
}
// 没有数据
export const activitylistAsync=()=>{
    return async (dispatch)=>{
        let data=await activitylist();
        // console.log(data)
        dispatch(activity(data))
    }
}
export const tagListAsync=()=>{
    return async (dispatch)=>{
        let data=await tagList();
        dispatch(tag(data.data))
    }
}
export const catehotsellAsync=()=>{
    return async (dispatch)=>{
        let data=await catehotsell();
        dispatch(hot(data.data.categoryList))
    }
}
export const popularlistAsync=()=>{
    return async (dispatch)=>{
        let data=await popularlist();
        dispatch(popular(data.data))
    }
}
export const flashsaleAsync=()=>{
    return async (dispatch)=>{
        let data=await flashsale();
        dispatch(flash(data.data.itemList))
    }
}
export const newitemlistAsync=()=>{
    return async (dispatch)=>{
        let data=await newitemlist();
        dispatch(newitem(data.data))
    }
}
export const shoppingguideAsync=()=>{
    return async (dispatch)=>{
        let data=await shoppingguide();
        dispatch(shopping(data.data))
    }
}
export const topcatelistAsync=()=>{
    return async (dispatch)=>{
        let data=await topcatelist();
        dispatch(topcate(data.data))
    }
}

export const temlistAsync=(id)=>{
    return async (dispatch)=>{
        let data=await temlist(id);
        dispatch(tem(data.data))
    }
}


