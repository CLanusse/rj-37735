
import { Button } from "react-bootstrap"
import { BsCartPlus } from 'react-icons/bs'

export const ItemListContainer = ({nombre}) => {

    

    return (
        <section className="container my-5">
            <h2>Nuestro productos</h2>
            <hr/>

            <p>Bienvenido {nombre}</p>

            <BsCartPlus />

            <Button variant="success" size="sm">CLICK ME</Button>
        </section>
    )
}