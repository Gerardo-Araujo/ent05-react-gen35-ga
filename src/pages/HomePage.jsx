import FormTrainer from "../components/HomePage/FormTrainer"
import '../components/Pokedexpage/style/HomePage.css'

const HomePage = () => {
  return (
  <div className="container">
    <img className="home__img" src='/pokedex.png' alt="" srcset="" />
    <div className="home__container">
        <h1 className="home__title">Pokedex</h1>
        <h2 className="home__hi">HOLA, ENTRENADOR</h2>
        <p className="home__parr">Para poder comenzar, dame tu Nombre... </p>
        <FormTrainer />
    </div>
    </div>
  )
}

export default HomePage
