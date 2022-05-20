import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {Navbar} from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'



function App() {

  const profesor = {
    nombre: 'Conrado Lanusse',
    rol: 'Profesor de React JS'
  }

  return (
    <div>
        <Navbar/>

        <ItemListContainer nombre={profesor.nombre}/>
        
    </div>
  );
}

export default App;
