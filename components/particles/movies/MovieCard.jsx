import { motion } from 'framer-motion'
import { useState } from 'react'

import MoviePoster from '../movies/MoviePoster'
import MovieTitle from '../movies/MovieTitle'

import AddToWatchListButton from '../movies/AddToWatchListButton'
import RemoveFromWatchListButton from '../watchlist/RemoveFromWatchListButton'


const MovieCard = ( props ) => {

const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={props.customMoviesTailWindClassNames.movieCard}
        initial={{ opacity: 0, backgroundColor: "#2230" }}
        animate={{ opacity: 1, backgroundColor: "#2238" }}
        transition={{ duration: .3 }}
        whileHover={{ backgroundColor: '#445C', transition: 2 }}
        >

        < MoviePoster poster={props.moviePoster} title={props.movieTitle} customMoviesTailWindClassNames={props.customMoviesTailWindClassNames.moviePoster} />
        < MovieTitle title={props.movieTitle} customMoviesTailWindClassNames={props.customMoviesTailWindClassNames.movieTitle} />
        
            <motion.div
              className={ !props.isAddedAlreadyComparisson(props.movie) ? props.customMoviesTailWindClassNames.addToWatchListButton : props.customMoviesTailWindClassNames.removeFromWatchListButton }
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: .1 }}
              > 
        
              {props.isAddedAlreadyComparisson(props.movie) ? (
              <RemoveFromWatchListButton
                handleRemoveFromWatchList={props.handleRemoveFromWatchList}
                movie={props.movie} />
              ) : (
              <AddToWatchListButton
                handleAddToWatchList={props.handleAddToWatchList}
                movie={props.movie} />
              )}
        
            </motion.div>

      </motion.div>
    </>
  )
}

export default MovieCard