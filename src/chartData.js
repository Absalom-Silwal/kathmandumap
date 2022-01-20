
/*const mapData =  useSelector(state => state.data.data.features)

const lessThan100 = mapData.filter(school=>school.properties['student:count']<=100)
const lessThan500 = mapData.filter(school=>school.properties['student:count']<=500)
const greaterThan500 = mapData.filter(school=>school.properties['student:count']>500)
const greaterThan1000 = mapData.filter(school=>school.properties['student:count']>1000)
console.log(lessThan100.length,lessThan500.length-lessThan100.length,greaterThan500.length-greaterThan1000.length,greaterThan1000.length)

export const chartData = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        '<100',
        '100-500',
        '500-1000',
        '>1000'
    ]
};*/
const ChartData = 
    
 
    {
        datasets: [{
            fill: true,
            lineTension: 0,
            backgroundColor: "rgb(78, 163, 243)",
            borderColor: "rgba(0,0,0,0)",
            data: [20,1000,4000,1000]
    }],

    labels: [
        'A',
        'B',
        'C',
        'D'
    ]

    }

export default ChartData;