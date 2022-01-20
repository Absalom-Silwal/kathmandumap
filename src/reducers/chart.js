import ChartData  from "../chartData"
const initState = {
    show:false,
    chart:''
}

export const chart = (state=initState,action)=>{
   console.log(action)
    switch (action.type) {
        case 'showChart':
            let chartData= {
                datasets: [{
                    
                    label: 'School Count',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: "white",
                   
                    data:action.dataset,
                    fontColor:'white'
            }],
        
            labels:action.labels
        
            }
                return {...state,show:true,chart:chartData}
            break;
        case 'removeChart':
            return{...state,show:false,chart:''}
        default:
            return state
            break;
    }
}