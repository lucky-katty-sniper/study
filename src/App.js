import logo from './logo.svg';
import './App.css';
import ChildRender from './ChildRender';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChildRender />
      </header>
    </div>
  );
}

export default App;
