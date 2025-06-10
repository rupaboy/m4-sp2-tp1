import { useEffect } from 'react'
import MovieCard from '../components/particles/movies/MovieCard'
import { movies } from '../src/utils/moviesJson'

const Movies = ( props ) => {

  return (
 
     <div className={props.customMoviesTailWindClassNames.movies}>
      {movies.map(( movie )=>(

            < MovieCard
              watchList={props.watchList}
              setWatchList={props.setWatchList}
              customMoviesTailWindClassNames={props.customMoviesTailWindClassNames}
              key={movie.id}
              moviePoster={movie.poster}
              movieTitle={movie.title}
            />
          
        
      ))}
    </div>
  )
}

export default Movies