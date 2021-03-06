import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { pedirDatos } from "../../mock/pedirDatos"


const PokeApi = () => {
    
    const [id, setId] = useState(1)
    const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])


    const handleSiguiente = () => {
        setId(id + 1)
    }
    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    
    return (
        <div className="container my-5">
            <h2>Poke API</h2>
            <hr/>

            <button className="btn btn-outline-primary" onClick={handleAnterior}>ANTERIOR</button>
            <button className="btn btn-primary mx-3" onClick={handleSiguiente}>SIGUIENTE</button>

            <h3>{pokemon?.name}</h3>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name}/>
                

        </div>
    )
}

export default PokeApi


// q : string, limit : number 
// query params
// const url = 'https://api.coderhouse.com/search?q=react&limit=10'

// segment params
// const url = 'https://api.coderhouse.com/alumnos/12666'

// const busqueda = 'perritos'
// const url = `https://api.giphy.com/v1/gifs/search?api_key=1234&q=${busqueda}&limit=20` 

// fetch('https://api.coderhouse.com/alumnos', {
//     method: 'POST',
//     headers: {
//         'Api_token': 'LANUSSE_123123'
//     },
//     body: JSON.stringify({
//         id: 12345,
//         name: 'Jorge Perez',
//         cursos: ['ReactJS', 'UX/UI']
//     })
// })