import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCounter from "../ItemCounter/ItemCounter"

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }

        console.log(itemToCart)
    }


    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>

            <hr/>
            <ItemCounter 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            />


            <button onClick={handleVolver}>VOLVER</button>
        </div>
    )
}

export default ItemDetail