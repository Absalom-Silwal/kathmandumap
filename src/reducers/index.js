import { loadData } from './loadData';
import { viewport } from './viewport';
import {selectedSchool} from './selectedSchool';
import {chart} from './chart'
import { combineReducers } from 'redux';


const allreducers = combineReducers({
    viewPort:viewport,
    selectedSchoolData:selectedSchool,
    data:loadData,
    chart:chart
   
    
    
})
export default allreducers;