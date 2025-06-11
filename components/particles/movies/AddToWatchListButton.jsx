import { motion } from "framer-motion"


const AddToWatchListButton = ( props ) => {

  return (
    <div onClick={ ()=> props.handleAddToWatchList(props.movie) }>
      Añadir a Favoritos
    </div>
  )
}

export default AddToWatchListButton