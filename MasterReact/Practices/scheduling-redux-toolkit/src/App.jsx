import styled from 'styled-components';
import './App.css'
import 'bulma/css/bulma.min.css'
import TimeSlotColumn from './components/TimeSlotColumn';


let PageContainer = styled.div`
    padding-top: 2vw;
    background-color: #f5f5f5;
    height: auto;
`

function App() {
  
  //////// CONSTANTS
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const currDate = new Date().toLocaleDateString(undefined, options);

  return (
    <PageContainer className="App">
      <h1 className="subtitle is-2">
          Single-Page Time Slot Reservation Demo (Front-End Only)
        </h1>
        <h1 className="subtitle is-5">
          {currDate} 
        </h1>
        <TimeSlotColumn />
      
    </PageContainer>
  )
}

export default App
