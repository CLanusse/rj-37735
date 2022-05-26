
const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        desc: "Una descripción",
        precio: 1200,
        img: 'https://via.placeholder.com/220'
    },
    {
        id: 2,
        nombre: "Producto 2",
        desc: "Una descripción",
        precio: 2200,
        img: 'https://via.placeholder.com/220'
    },
    {
        id: 3,
        nombre: "Producto 3",
        desc: "Una descripción",
        precio: 3200,
        img: 'https://via.placeholder.com/220'
    },
    {
        id: 4,
        nombre: "Producto 4",
        desc: "Una descripción",
        precio: 4200,
        img: 'https://via.placeholder.com/220'
    },
    {
        id: 5,
        nombre: "Producto 5",
        desc: "Una descripción",
        precio: 5200,
        img: 'https://via.placeholder.com/220'
    },
]


export const ItemListContainer = () => {


    const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(productos)
            }, 2000)
        })
    }

    pedirDatos() //fetch
        .then((resp) => {
            console.log(resp)
        })
        .catch((error) => {
            console.log('ERROR', error)
        })



    

    return (
        <section className="container my-5">
            <h2>Nuestro productos</h2>
            <hr/>

            

        </section>
    )
}