import { useCartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs"

const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                <div key={item.id} className="my-2">
                    <h5>{item.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr/>
                </div>
                ))
            }


            <h4>TOTAL: ${totalPrice()}</h4>

            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
}

export default Cart