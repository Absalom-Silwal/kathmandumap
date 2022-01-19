export const selectedSchool = (selectedSchool)=>{
    return{
    type : 'selectedSchool',
    selectedSchoolData:selectedSchool,
}
}

export const unSelectSchool = () =>{
    return{
        type : 'unselectSchool',
    }
}