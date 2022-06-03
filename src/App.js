import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {Navbar} from './components/Navbar/Navbar'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar2 from './components/Navbar2/Navbar2';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      
          {/* <Routes>
            <Route path='/login' element={<Navbar/>}/>
            <Route path='*' element={<Navbar2/>}/>
          </Routes>           */}
          <Navbar2 />

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>  
            <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>          
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/nosotros' element={ <Nosotros /> } />
            <Route path='/contacto' element={ <Contacto /> } />
            <Route path='*' element={ <Navigate to={"/"} /> } />
            {/* <Route path='*' element={ <Error404/> } /> */}
          </Routes>
    
          <Footer/>
    </BrowserRouter>
  );
}

export default App;

{/* <Route path='/users' element={ <Users/> }>
  <Route path='/login' element={<Login/>}/>
</Route> */}
