const initState = {
    selected : false ,
    selectedSchool:'' 
}
export const selectedSchool =(state=initState,action)=>{
    switch (action.type) {
        case 'selectedSchool':
                return { ...state, selected:true,selectedSchool:action.selectedSchoolData}
            break;
            case 'unselectSchool':
                return { ...state, selected:false,selectedSchool:''}
            break;
    
        default:
            return state
            break;
    }
}