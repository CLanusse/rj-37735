import './Navbar2.scss'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar2 = () => {

    return (
        <header className="header2">
            <div className="header__container">

                <Link to={"/"}><h1 className="header__logo">PROYECTO CODER</h1></Link>
                

                <nav className="header__navbar">
                    <Link to={"/categorias/remeras"} className="header__navlink">Remeras</Link>
                    <Link to={"/categorias/buzos"} className="header__navlink">Buzos</Link>
                    <Link to={"/categorias/zapatillas"} className="header__navlink">Zapatillas</Link>
                </nav>

                <CartWidget/>
            </div>
        </header>
    )
}

export default Navbar2