import { useEffect, useState } from "react"


const Counter = () => {

    const [contador1, setContador1] = useState(1)
    const [contador2, setContador2] = useState(1)

    const incrementar1 = () => {
        setContador1( contador1 + 1 )
    }
    const incrementar2 = () => {
        setContador2( contador2 + 1 )
    }

    useEffect(() => {
        console.log("Montaje de COUNTER")

        return () => {
            console.log("Se desmontó el COUNTER")
        }
    }, [])

    // useEffect(() => {
    //     console.log("Actualizacion contadores")
        
    // }, [contador1, contador2])

    // useEffect(() => {
    //     console.log("Actualizacion contador 1")
    // }, [contador1])

    // useEffect(() => {
    //     console.log("Actualizacion contador 2")
    // }, [contador2])

    return (
        <div className="container my-5">
            <h2>Counter</h2>
            <hr/>

            <p onClick={incrementar1}>{contador1}</p>
            <hr/>
            <p onClick={incrementar2}>{contador2}</p>
        </div>
    )
}

export default Counter