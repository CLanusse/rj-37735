import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import MemoComp from "../../ejemplos/MemoComp/MemoComp"
import ItemCounter from "../ItemCounter/ItemCounter"

const ItemDetail = ({item}) => {

    const {addItem, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        if (cantidad === 0) return

        const itemToCart = {
            ...item,
            cantidad
        }

        addItem(itemToCart)
    }


    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>

            <MemoComp />

            <hr/>
            {
                isInCart(item.id)
                ? <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>
                :
                    <ItemCounter 
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }

            

            <br/>
            <button onClick={handleVolver}>VOLVER</button>
        </div>
    )
}

export default ItemDetail