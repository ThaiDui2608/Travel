import Headers from './components/Header/Header'
import Travel from './components/Travel/Travel'
import './App.css';
import { data } from './data';

function App() {
  const travel = data.map(x => {
    return (
      <Travel
        key = {x.key}
        {...x}
      />
    )
  })

  return (
    <div className="App">
      <Headers/>
      {travel}
    </div>
  );
}

export default App;
