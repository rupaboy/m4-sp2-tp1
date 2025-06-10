import { useState } from 'react'
import { motion } from 'framer-motion'

import MoviePoster from '../movies/MoviePoster'
import MovieTitle from '../movies/MovieTitle'
import AddToWatchListButton from '../movies/AddToWatchListButton'



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
      transition={{ duration: .6 }}
      whileHover={{ backgroundColor: '#445C', transition: 2 }}
      >
        
        < MoviePoster poster={props.moviePoster} title={props.movieTitle} customMoviesTailWindClassNames={props.customMoviesTailWindClassNames.moviePoster} />
        < MovieTitle title={props.movieTitle} customMoviesTailWindClassNames={props.customMoviesTailWindClassNames.movieTitle} />
        
        <motion.div
        className={ props.customMoviesTailWindClassNames.addToWatchListButton }
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: .3 }}
        
        >
          < AddToWatchListButton />
         
          </motion.div>
        
      </motion.div>
    </>
  )
}

export default MovieCard