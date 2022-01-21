import { viewPort } from "../actions/viewport"

const initState = {
    viewPort:{
        latitude: 27.7172,
        longitude: 85.3240,
        width: "57vw",
        height: "85vh",
        zoom:12
    }
    
}
export const viewport =(state=initState,action)=>{
    switch (action.type) {
        case 'viewPort':
                return {...state,viewPort:action.nextViewPOrt}
            break;
    
        default:
            return state
            break;
    }
}