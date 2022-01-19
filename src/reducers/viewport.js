import { viewPort } from "../actions/viewport"

const initState = {
    viewPort:{
        latitude: 27.7172,
        longitude: 85.3240,
        width: "100vw",
        height: "100vh",
        zoom:12.5
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