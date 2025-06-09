import React from 'react'

import Movies from './Movies'
import MovieCard from '../components/particles/movies/MovieCard'
import RemoveFromWatchListButton from '../components/particles/watchlist/RemoveFromWatchListButton'

import { movies } from '../src/utils/moviesJson'


const WatchList = ( props ) => {


  return (
    <div className={props.customWatchListTailWindClassNames.watchList}>
      
      
        < Movies
          customMoviesTailWindClassNames={ props.customWatchListTailWindClassNames } />
        {/*< RemoveFromWatchListButton />*/}
      
    </div>
  )
}

export default WatchList