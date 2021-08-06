import logo from './logo.svg';
import './App.css';
import ChildRender from './ChildRender';
import ChildFetch from './ChildFetch';

function App() {
  console.log(`inside App component / ${process.env.NODE_ENV}`);
  console.log(`inside App component / ${process.env.REACT_APP_API}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChildRender />
        <ChildFetch />
      </header>
    </div>
  );
}

export default App;
