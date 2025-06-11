import MovieCard from '../components/particles/movies/MovieCard'


const Movies = ( props ) => {

  return (
 
     <div className={props.customMoviesTailWindClassNames.movies}>
      {props.movies.map(( movie )=>(

            < MovieCard
              movie={movie}
              setWatchList={props.setWatchList}
              handleAddToWatchList = {props.handleAddToWatchList}
              handleRemoveFromWatchList={props.handleRemoveFromWatchList}
              customMoviesTailWindClassNames={props.customMoviesTailWindClassNames}
              key={movie.id}
              moviePoster={movie.poster}
              movieTitle={movie.title}
              isAddedAlreadyComparisson={props.isAddedAlreadyComparisson}
              />

          ))}
      </div>
    )
}

export default Movies