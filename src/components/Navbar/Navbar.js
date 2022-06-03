import './Navbar.scss'


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">

                <h1 className="header__logo">PROYECTO CODER</h1>

                <nav className="header__navbar">
                    <a href="/" className="header__navlink">Home</a>
                    <a href="/nosotros" className="header__navlink">Nosotros</a>
                    <a href="/contacto" className="header__navlink">Contacto</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar