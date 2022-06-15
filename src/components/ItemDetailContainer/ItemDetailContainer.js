import { useEffect, useState } from "react"
import { pedirDatos } from "../../mock/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
               setItem( resp.find((item) => item.id === Number(itemId)) )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="container my-5">
            
            {
                loading
                ?   <Loader/>   
                :   <ItemDetail item={item}/>
            }
            
        </section>
    )
}