import TimeSlot from './TimeSlot'
import { useSelector } from "react-redux";

function TimeSlotColumn() {
    const time_range_list = useSelector(
        state => state.timeWindowReducer)
    return (

        <div className="columns">
            <div className="column">
            </div>


            <div className="column is-one-quarter">
                {time_range_list.map( time => {
                    return <TimeSlot 
                    time = {time} 
                    key={Math.random()}/>
                })}
            </div>


            <div className="column">
            </div>

        </div>
        
    );
}

export default TimeSlotColumn;