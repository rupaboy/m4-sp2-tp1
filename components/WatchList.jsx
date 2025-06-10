import React from 'react'

import Movies from './Movies'
import MovieCard from '../components/particles/movies/MovieCard'
import RemoveFromWatchListButton from '../components/particles/watchlist/RemoveFromWatchListButton'


const WatchList = ( props ) => {

  console.log(props.watchList)

  return (
    <div
      className={props.customWatchListTailWindClassNames.watchList}
      >
      
        < Movies
          customMoviesTailWindClassNames={ props.customWatchListTailWindClassNames }
          //handleAddToWatchList = {props.handleAddToWatchList}
          movies = {props.watchList}
          />
          
      
    </div>
  )
}

export default WatchList