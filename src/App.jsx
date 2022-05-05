
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListCointainer from './pages/ItemListCointainer';
import ItemDetailContainer from './pages/ItemDetailCointainer';
import { Routes , Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes> 
        <Route path= "/" element={<ItemListCointainer/>} />
        <Route path="/category/:categoryId" element={<ItemListCointainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
      {/* <ItemDetailContainer /> */}
      {/* <ItemListCointainer greeting="Bienvenido a ferretería PALO" /> */}
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
