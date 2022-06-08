import { useState } from "react"


const ItemCounter = ( {max, setCounter, counter, handleAgregar} ) => {

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > 1 && setCounter(counter - 1)
    }


    return (
        <div className="my-3">
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <hr/>

            <button onClick={handleAgregar} className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter