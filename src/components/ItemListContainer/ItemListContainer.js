import { useEffect, useState } from "react"
import { pedirDatos } from "../../mock/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    // const params = useParams()
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        // peticion de datos al MOCK
        pedirDatos()
            .then((resp) => {
                if (!categoryId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoria === categoryId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <section className="container my-5">
            {
                loading
                ?  <Loader/>
                :  <ItemList items={items}/>
            }

        </section>
    )
}