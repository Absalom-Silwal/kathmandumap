
import './App.css';
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import icon from "./school.png"
import { useSelector, useDispatch} from 'react-redux'
import { loadData } from './actions/loadData';
import {viewPort} from './actions/viewport';
import {selectedSchool,unSelectSchool} from './actions/selectedSchool'
import classes from './App.module.css'


function App() {
  const dispatch = useDispatch();
  const mapViewPort = useSelector(state => state.viewPort.viewPort)
  const mapData =  useSelector(state => state.data.data.features)
  const schoolData = useSelector(state =>state.selectedSchoolData)

  return (
    <div>
     <ReactMapGL
        {...mapViewPort}
      
        mapboxApiAccessToken="pk.eyJ1IjoiYWJzYWxvbS03IiwiYSI6ImNreWl0eGhxejFlcXMyb3BtN21xM21xZDcifQ.Y2ccntxpT653E-6lWXApxw"
        mapStyle="mapbox://styles/absalom-7/ckyiuljb94apc14lev3z91yci"
        onViewportChange={nextViewport => dispatch(viewPort(nextViewport))}
     >
     <div>
       {schoolData.selected?(
         <div className={classes.main}>
           <div>
             {mapData.map((mapData)=>{
               return(
                 <Marker
                  key={mapData.id}
                  latitude={mapData.geometry.coordinates[0][0][1]}
                  longitude={mapData.geometry.coordinates[0][0][0]}
                 >
                   <img src={icon} height='5' width='5' onMouseOver={()=>dispatch(selectedSchool(mapData))} onMouseLeave={()=>dispatch(unSelectSchool())}/>
                 </Marker>
               )
             })}
           </div>
           <div>{schoolData.selectedSchool.properties.name}</div>
         </div>
       ):(
        <div>

          {mapData.map((mapData)=>{
            return(
              <Marker
              key={mapData.id}
              latitude={mapData.geometry.coordinates[0][0][1]}
              longitude={mapData.geometry.coordinates[0][0][0]}
              >
                <img src={icon} height='5' width='5' onMouseOver={()=>dispatch(selectedSchool(mapData))} onMouseLeave={()=>dispatch(unSelectSchool())}/>
              </Marker>
            )
            
          })}
        </div>
       )}
     </div>
    

     </ReactMapGL>
    </div>
  );
}

export default App;
