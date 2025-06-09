import { motion } from "framer-motion"


const MoviePoster = ( props ) => {

//  console.log(props.customMoviesTailWindClassNames)

  return (
      <motion.img
        className={ props.customMoviesTailWindClassNames }
        src={props.poster}
        alt={props.title}
        title={props.title}

        initial={{ opacity: 1 }}
      />
  )
}

export default MoviePoster