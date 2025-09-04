import './App.css'
import { Counter } from './Counter';

function App() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
      {counter}
    </div>
  );
}



export default App
