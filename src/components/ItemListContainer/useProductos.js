import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"


export const useProductos = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    // const params = useParams()
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        // 1.- armar la referencia
        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef
        // 2.- (async) llamar a Firebase con la referencia anterior
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log(newItems)
                setItems( newItems )
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])

    return {
        items, loading
    }
}