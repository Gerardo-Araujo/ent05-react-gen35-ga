import { useRef } from "react"
import { setTrainer } from "../../store/state/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../Pokedexpage/style/FormTrainer.css"

const FormTrainer = () => {

    const trainerInput =useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim()))
        navigate('/pokedex')
    }


  return (
    <form className="form__trainer" onSubmit={handleSubmit}>
        <input ref={trainerInput} type="text" />
        <button> Comenzar</button>
    </form>
  )
}

export default FormTrainer