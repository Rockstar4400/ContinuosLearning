import { combineReducers } from "redux";
import timeWindowReducer from "../../../scheduling-app/src/reducers/timeWindowReducer";
import dateReducer from "../../../scheduling-app/src/reducers/dateReducer";


const allReducers = combineReducers({
    timeWindowReducer,
    dateReducer
})

export default allReducers;