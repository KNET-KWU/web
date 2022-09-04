import logo from './temp.png';
import './App.css';
import Wcomponent from './welcome/wcomponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wcomponent />
        <img src={logo} className="App-logo" alt="logo" />
        <div>끼얏호우~~~!!</div>
      </header>
    </div>
  );
}

export default App;
