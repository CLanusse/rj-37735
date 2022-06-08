import { useState } from "react"


const Contacto = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        console.log( e.target.name)
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Submit del form")
        console.log(values)
    }

    return (
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <h4>Datos personales</h4>

                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre} 
                    placeholder="Nombre"
                    type={'text'}
                    className="form-control my-2"
                />

                <input
                    name="email"
                    value={values.email} 
                    onChange={handleInputChange}
                    placeholder="Email"
                    type={'email'}
                    className="form-control my-2"
                />

                <input 
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    placeholder="Dirección"
                    type={'text'}
                    className="form-control my-2"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto


    // const handleClick = (e) => {
    //     e.stopPropagation()
    //     console.log(e)
    // }

    // useEffect(() => {

    //     const clicker = (e) => {
    //         console.log(e)
    //     }

    //     window.addEventListener('click', clicker)

    //     return () => {
    //         window.removeEventListener('click', clicker)
    //     }
    // }, [])


    // const [nombre, setNombre] = useState('')
    // const [email, setEmail] = useState('')

    // const handleNombre = (e) => {
    //     setNombre(e.target.value)
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }