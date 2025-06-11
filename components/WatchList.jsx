import React from 'react'

import Movies from './Movies'
import MovieCard from '../components/particles/movies/MovieCard'
import RemoveFromWatchListButton from '../components/particles/watchlist/RemoveFromWatchListButton'


const WatchList = ( props ) => {

  return (
    <div
      className={props.customWatchListTailWindClassNames.watchList}
      >
        < Movies
          customMoviesTailWindClassNames={ props.customWatchListTailWindClassNames }
          isAddedAlreadyComparisson={props.isAddedAlreadyComparisson}
          movies = {props.watchList}
          handleRemoveFromWatchList={props.handleRemoveFromWatchList}
          />
    </div>
  )
}

export default WatchList