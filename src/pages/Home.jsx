import { useState, useEffect } from "react"
import MoviesCard from "../components/MoviesCard";

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;


const Home = () => {
  const [topMovies, setTopMovies] = useState([])

 const getTopRateMovies = async (url) => {
    const res = await fetch(url)
    const data =  await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRateURL =  `${moviesURL}top_rated?${apiKEY}`

    getTopRateMovies(topRateURL)
  }, []) 

  return(
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Caregando...</p> }
      {topMovies.length > 0 && topMovies.map((movie) => <MoviesCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home