import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <p>There is nothing here yet, but if you reload the page you might get lucky!</p>
        <button onClick={() => window.location.reload(false)}>RELOAD</button>
      </header>
    </div>
  );
}

export default App;
