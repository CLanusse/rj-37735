import './styles.css'
import {Navbar} from './components/Navbar'


function App() {

  const contenido = "Este es el contenido de mi App."
  const estiloContenido = {fontSize: "50px", border: "1px solid #FFF"}

  return (
    <div className="App">
        <Navbar/>

        <p style={estiloContenido}>{contenido}</p>
    </div>
  );
}

export default App;
