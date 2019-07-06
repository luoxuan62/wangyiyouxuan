const defaultState={
    inputSearch:"",
    flag:false,
    fla:true,
    newitem:[]
}
export default(state=defaultState,action)=>{
    switch(action.type){
        case "NEW_ITEM":
            let newitemState = JSON.parse(JSON.stringify(state));
            newitemState.newitem = action.value;
            return newitemState
        case "INPUT_VAL":
            let InputState = JSON.parse(JSON.stringify(state));
            InputState.inputSearch=action.value
            InputState.flag=true
            InputState.fla=false
            console.log(InputState.name)
            return InputState
        case "INPUT_CEL":
            let CancelState = JSON.parse(JSON.stringify(state));
            CancelState.flag=false
            CancelState.fla=true
    }
    return state
}