import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {Navbar} from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Counter from './ejemplos/Counter/Counter';
import Counter2 from './ejemplos/Counter2/Counter2';
import { useState } from 'react';



function App() {

  const [mostrar, setMostrar] = useState(true)
  
  const mostrarCounter = () => {
    setMostrar(!mostrar)
  }

  return (
    <div>
        <Navbar/>

        <button className='btn btn-primary' onClick={mostrarCounter}>MOSTRAR/OCULTAR</button>

        {
          mostrar ? <Counter/> : <div></div>
        }

        
        {/* <Counter2/> */}

        {/* <ItemListContainer/> */}
        
    </div>
  );
}

export default App;
