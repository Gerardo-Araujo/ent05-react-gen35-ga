import { useState } from "react"
import '../components/Pokedexpage/style/Pagination.css'



export const Pagination = (pagina) => {
const [pagine, setPagine] = useState(pagina)

const increment = () => {
    setPagine(pagina = pagine+1)
}

const decrement = () => {
    setPagine(pagina = pagine -1)
}



  return (
    <div>
      <button onClick={decrement}>Anterior Pag</button>
        <h2>Pagina: {pagine}</h2>
      <button onClick={increment}>Siguiente Pag</button>
    </div>
  )
}

export default Pagination
