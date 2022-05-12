import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Conrado Lanusse - the best</h1>

        <img src={logo} className="App-logo" alt="logo" />
        
        <ul>
          <h3>TUTORES</h3>
          <li>Gaston</li>
          <li>Sergio</li>
          <li>Armando</li>
          <li>Anthony</li>
        </ul>

        <a
          className="App-link"
          href="https://coderhouse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Coder!
        </a>
      </header>
    </div>
  );
}

export default App;
