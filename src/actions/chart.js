export const showChart =(labels,dataset)=>{
    return{type:'showChart',
    labels:labels,
    dataset:dataset
}
}
export const removeChart = ()=>{
    return{
        type:'removeChart'
    }
}