
import { useState, useEffect } from "react"


const Counter2 = () => {

    // const [contador, setContador] = useState(1)

    // const incrementar = () => {
    //     setContador( contador + 1 )
    // }

    const [contador, setContador] = useState({
        contador: 1,
        fyh: new Date()
    })

    const incrementar = () => {
        setContador( {
            contador: contador.contador + 1,
            fyh: new Date()
        } )
    }
    
    // montaje + actualizacion
    // useEffect(() => {
    //     console.log("Componente montado")
    // })

    // sólo en montaje
    useEffect(() => {
        console.log("Componente montado")
    }, [])

    useEffect(() => {
        console.log("Contador actualizado")
    }, [contador])

    return (
        <div className="container my-5">
            <h2>Counter</h2>
            <hr/>
            <button className="btn btn-primary" onClick={incrementar}>CLICK ME</button>
            <hr/>
            <h4>{contador.contador}</h4>
            {/* <p>FyH del último click: {new Date().toLocaleString()}</p> */}
            <p>FyH del último click: {contador.fyh.toLocaleString()}</p>
        </div>
    )
}

export default Counter2