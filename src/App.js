import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {Navbar} from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import PokeApi from './ejemplos/PokeApi/PokeApi';



function App() {

  return (
    <div>
        <Navbar/>

        <PokeApi />
        {/* <ItemListContainer/> */}
        
    </div>
  );
}

export default App;
