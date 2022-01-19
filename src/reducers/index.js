import { loadData } from './loadData';
import { viewport } from './viewport';
import {selectedSchool} from './selectedSchool'
import { combineReducers } from 'redux';
const allreducers = combineReducers({
    viewPort:viewport,
    selectedSchoolData:selectedSchool,
    data:loadData,
    
    
})
export default allreducers;