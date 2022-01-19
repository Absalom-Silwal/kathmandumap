import data from "../mapdata.json"
const initState = {
    data:data
}

export const loadData = (state=initState,action)=>{
    switch (action.type) {
        case 'loadData':
            return state
            
            break;
    
        default:
            return state
            break;
    }
}