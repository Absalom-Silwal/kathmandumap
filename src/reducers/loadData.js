import data from "../mapdata.json"
const initState = {
    filterData:true,
    choice:'primary',
    data:data
}

export const loadData = (state=initState,action)=>{
    console.log(action)
    switch (action.type) {
        case 'loadAllData':
            return {...state,filterData:false,choice:'all',data:data}
            
            break;
        case 'filterData':
            return {...state,filterData:true,choice:action.choice,data:data}
            break;
        default:
            return state
            break;
    }
}