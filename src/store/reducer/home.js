const defaultState={
    bannerlist:[],
    cate:[],
    activity:[],
    tag:[],
    hot:[],
    popular:[],
    flash:[],
    newitem:[],
    shopping:[],
    topcate:[],
    tem:[]
}
export default(state=defaultState,action)=>{
    switch(action.type){
        case "BANNER_LIST":
            let bannerState = JSON.parse(JSON.stringify(state));
            bannerState.bannerlist = action.value;
            return bannerState
        case "CATE_LIST":
            let cateState = JSON.parse(JSON.stringify(state));
            cateState.cate = action.value;
            return cateState
        case "ACTIVITY_LIST":
            let activityState = JSON.parse(JSON.stringify(state));
            activityState.activity = action.value;
            return activityState
        case "TAG":
            let tagState = JSON.parse(JSON.stringify(state));
            tagState.tag = action.value;
            return tagState
        case "HOT":
            let hotState = JSON.parse(JSON.stringify(state));
            hotState.hot = action.value;
            return hotState
        case "POPULAR":
            let popularState = JSON.parse(JSON.stringify(state));
            popularState.popular = action.value;
            return popularState
        case "FLASH":
            let flashState = JSON.parse(JSON.stringify(state));
            flashState.flash = action.value;
            return flashState
        case "NEW_ITEM":
            let newitemState = JSON.parse(JSON.stringify(state));
            newitemState.newitem = action.value;
            return newitemState
        case "SHOPPING":
            let shoppingState = JSON.parse(JSON.stringify(state));
            shoppingState.shopping = action.value;
            return shoppingState
        case "TOPCATE":
            let topcateState = JSON.parse(JSON.stringify(state));
            topcateState.topcate = action.value;
            return topcateState
        case "TEM_LIST":
            let temState = JSON.parse(JSON.stringify(state));
            temState.tem = action.value;
            return temState
}
    return state
}