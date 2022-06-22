import Nosotros from '../components/Nosotros/Nosotros'
import Contacto from '../components/Contacto/Contacto'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import Footer from '../components/Footer/Footer';
import Navbar2 from '../components/Navbar2/Navbar2';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import {Routes, Route, Navigate} from 'react-router-dom'
import UserInfo from '../components/UserInfo/UserInfo';
import Checkout from '../components/Checkout/Checkout';

const PrivateRoutes = () => {

    return (
        <>
            <Navbar2 />
            <UserInfo />
                <Routes>
                    <Route path='/' element={ <ItemListContainer/> }/>  
                    <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>          
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                    <Route path='/nosotros' element={ <Nosotros /> } />
                    <Route path='/contacto' element={ <Contacto /> } />
                    <Route path='*' element={ <Navigate to={"/"} /> } />
                </Routes>
            <Footer/>
        </>
    )
}

export default PrivateRoutes