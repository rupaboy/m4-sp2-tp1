import MovieCard from '../components/particles/movies/MovieCard'

const Movies = ( props ) => {

  return (
 
     <div className={props.customMoviesTailWindClassNames.movies}>
      {props.movies.map(( movie )=>(

            < MovieCard
              setWatchList={props.setWatchList}
              isAddedAlready={props.isAddedAlready}
              handleAddToWatchList = {props.handleAddToWatchList}
              handleHoverWatchListButton={props.handleHoverWatchListButton}
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