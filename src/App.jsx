import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListCointainer from './components/ItemListCointainer';
import ItemDetailContainer from './components/ItemDetailCointainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListCointainer greeting="Bienvenido a ferretería PALO" /> */}
      <ItemDetailContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
