export const loadData = ()=>{
    return{
        type: 'loadAllData',
    }
   
}
export const filterData=(choice)=>{
    return{
        type:'filterData',
        choice:choice
    }
}