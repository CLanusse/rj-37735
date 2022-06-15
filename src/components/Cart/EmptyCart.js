import { Link } from "react-router-dom"

const EmptyCart = () => {

    return (
        <div className="container my-5">
            <h2>Tu carrito está vacío</h2>
            <hr/>

            <Link to="/" className="btn btn-primary">Ir a comprar</Link>
        </div>
    )
}

export default EmptyCart