
import './App.css';
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import symbol from "./schoolSymbol.png"
import pic from "./schoolPic.jpg"
import { useSelector, useDispatch} from 'react-redux'
import { loadData,filterData } from './actions/loadData';
import {viewPort} from './actions/viewport';
import { showChart ,removeChart} from './actions/chart';
import {selectedSchool,unSelectSchool} from './actions/selectedSchool'
import {Line} from 'react-chartjs-2'
import classes from './App.module.css'
import Chart from 'chart.js/auto'



function App() {
  const dispatch = useDispatch();
  const fltr = useSelector(state=>state.data.filterData)
  const fltrChoice = useSelector(state=>state.data.choice)
  const mapViewPort = useSelector(state => state.viewPort.viewPort)
  const mapData =  useSelector(state => state.data.data.features)
  const schoolData = useSelector(state =>state.selectedSchoolData)
  const primary = mapData.filter(school=>school.properties['isced:level']==='primary')
  const lowerSecondary = mapData.filter(school=>school.properties['isced:level']==='lower_secondary')
  const secondary = mapData.filter(school=>school.properties['isced:level']==='secondary')
  const college = mapData.filter(school=>school.properties['isced:level']==='college')
 const others = mapData.length-primary.length-lowerSecondary.length-secondary.length-college.length
  
  console.log(mapData.length,primary.length,lowerSecondary.length,secondary.length,college.length)
  console.log(mapData[0].properties['isced:level'],fltrChoice)
  const lessThan100 = mapData.filter(school=>school.properties['student:count']<=100)
  const lessThan500 = mapData.filter(school=>school.properties['student:count']<=500)
  const greaterThan500 = mapData.filter(school=>school.properties['student:count']>500)
  const greaterThan1000 = mapData.filter(school=>school.properties['student:count']>1000)
  const chartData = useSelector(state=>state.chart)
  
  const labels = ['<100','100-500','500-1000','>1000']
  const dataset = [lessThan100.length,lessThan500.length-lessThan100.length,greaterThan500.length-greaterThan1000.length,greaterThan1000.length]
  console.log(dataset)
  
  
  let fltrDataMap=''
  
  if(fltr){
    fltrDataMap = mapData.filter(school=>school.properties['isced:level']===fltrChoice)
  }else{
    fltrDataMap = mapData
  }
  console.log(fltrDataMap)                                        
  return (
    <div className={classes.body}>
    
    
    <div className={classes.header}>
      <div className={classes.total}>
        <div className={classes.title}>TOTAL</div>
        <div className={classes.num}>{mapData.length}</div>
      </div>
      <div className={classes.primary}>
        <div className={classes.title}>PRIMARY</div>
        <div className={classes.num}>{primary.length}</div>
      </div>
      <div className={classes.lowerSecondary}>
        <div className={classes.title}>lOWER SECONDARY</div>
        <div className={classes.num}>{lowerSecondary.length}</div>
      </div>
      
      <div className={classes.secondary}>
      <div className={classes.title}>SECONDARY</div>
        <div className={classes.num}>{secondary.length}</div>
      </div>
      <div className={classes.college}>
        <div className={classes.title}>COLLEGE</div>
        <div className={classes.num}>{college.length}</div>
      </div>
      <div className={classes.others}>
        <div className={classes.title}>others</div>
        <div className={classes.num}>{others}</div>
      </div>
      
    </div>
    
    <div className={classes.mid}>
    {chartData.show?(
      <div className={classes.chart}>
      <button onClick={()=>dispatch(removeChart())}>X</button>
      <Line
          data={chartData.chart}
          options={{
            indexAxis: 'y',
            legend:{
              display:false
            },
            scales: {
                y: {
              ticks: {
                color: 'white',
                font: {
                  size: 14,
                }
        }
      },
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 14
          }
        }
      }
         
  
          }} }
        />
      </div>
    ):(<div className={classes.replaceContainer}>
      <div className={classes.replace}>
      <div className={classes.rephdr}>
        <div className={classes.title}>Schools</div>
        <div className={classes.rphdrnum}>Student Count</div>
      </div>
      <div className={classes.lehu}>
        <div className={classes.title}>lessThan100</div>
        <div className={classes.num}>{lessThan100.length}</div>
      </div>
      <div className={classes.hutofi}>
        <div className={classes.title}>100-500</div>
        <div className={classes.num}>{lessThan500.length-lessThan100.length}</div>
      </div>
      <div className={classes.fitoth}>
        <div className={classes.title}>500-1000</div>
        <div className={classes.num}>{greaterThan500.length-greaterThan1000.length}</div>
      </div>
      <div className={classes.grth}>
        <div className={classes.title}>greaterThan1000</div>
        <div className={classes.num}>{greaterThan500.length-greaterThan1000.length,greaterThan1000.length}</div>
      </div>
      </div>
       <div className={classes.btnDiv}>
       
      <div className={classes.filterHeader}>filters</div>
      <div className={classes.graphbtn}><button onClick={()=>dispatch(showChart(labels,dataset))}>graph</button></div>
      <div className={classes.top}>
       <div className={classes.first}><button onClick={()=>dispatch(loadData())}>all</button></div>
        <div className={classes.second}><button onClick={()=>dispatch(filterData('primary'))}>primary</button></div>
      </div>
       
        <div className={classes.third}><button onClick={()=>dispatch(filterData('lower_secondary'))}>lowerSecondary</button></div>
      <div className={classes.bottom}>
       <div className={classes.fourth}><button onClick={()=>dispatch(filterData('secondary'))}>secondary</button></div>
        <div className={classes.fifth}><button onClick={()=>dispatch(filterData('college'))}>college</button></div>
      </div>
       
      </div>  
      </div>
    )}
     
      <div >
      <ReactMapGL
        {...mapViewPort}
      
        mapboxApiAccessToken="pk.eyJ1IjoiYWJzYWxvbS03IiwiYSI6ImNreWl0eGhxejFlcXMyb3BtN21xM21xZDcifQ.Y2ccntxpT653E-6lWXApxw"
        mapStyle="mapbox://styles/absalom-7/ckyn48o8g4zhg14l2d53tzqab"
        onViewportChange={nextViewport => dispatch(viewPort(nextViewport))}
     >
     <div className={classes.mapContainer}>
     <div className={classes.mapHeader}>{fltrChoice} schools of kathmandu</div>
       {schoolData.selected?(
         <div className={classes.main}>
         
           <div>
             {fltrDataMap.map((mapData)=>{
               return(
                 <Marker
                  key={mapData.id}
                  latitude={mapData.geometry.coordinates[0][0][1]}
                  longitude={mapData.geometry.coordinates[0][0][0]}
                 >
                   <img src={symbol}  height='20' width='20' onClick={()=>dispatch(selectedSchool(mapData))} />

                 </Marker>
               )
             })}
           </div>
           <div className={classes.description}>
           <div><button onClick={()=>dispatch(unSelectSchool())}>X</button></div>
           <div><img src={pic} heigth='30%' width='90%'/></div>
           <div><h1>{schoolData.selectedSchool.properties.name}</h1></div>
           <div>level:{schoolData.selectedSchool.properties['isced:level']}</div>
           <div>Student count:{schoolData.selectedSchool.properties['student:count']}</div>
           
           
           </div>
         </div>
       ):(
        <div>

          {fltrDataMap.map((mapData)=>{
            return(
              <Marker
              key={mapData.id}
              latitude={mapData.geometry.coordinates[0][0][1]}
              longitude={mapData.geometry.coordinates[0][0][0]}
              >
                <img src={symbol}  height='30' width='20' onClick={()=>dispatch(selectedSchool(mapData))} />
              </Marker>
            )
            
          })}
        </div>
       )}
     </div>
    

     </ReactMapGL>
      </div>
    </div>
 
    </div>
  );
}

export default App;
