

const ItemCounter = ( {max, setCounter, counter, handleAgregar} ) => {
    
    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > 0 && setCounter(counter - 1)
    }

    const btnRestarConfig = {
        onClick: handleRestar,
        className: `btn mx-1 ${counter === 0 ? "btn-outline-danger" : "btn-outline-primary"} ${counter === 1 ? "min-value" : ''}`,
        disabled: counter === 0
    }


    if (max === 0) {
        return (
            <div className="my-3">
                <p>NO HAY STOCK DE ESTE PRODUCTO</p>
            </div>
        )
    }

    return (
        <div className="my-3">
            {/* <button 
                onClick={handleRestar} 
                className={`btn mx-1 ${counter === 0 ? "btn-outline-danger" : "btn-outline-primary"} ${counter === 1 ? "min-value" : ''}`}
                disabled={counter === 0}
            >
                -
            </button> */}
            <button {...btnRestarConfig}>
                -
            </button>

            <span className="mx-2">{counter}</span>

            <button 
                onClick={handleSumar} 
                className={counter === max ? "btn mx-1 btn-danger" : "btn mx-1 btn-primary"}
                disabled={counter === max}
                >
                    +
                </button>
            <hr/>

            <button disabled={counter === 0}  onClick={handleAgregar} className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter