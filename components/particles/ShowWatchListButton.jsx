import { motion } from 'framer-motion'

const ShowWatchListButton = ( props ) => {
  
  const buttonText = props.isWatchListOpen ?'Volver' :'Favoritos'
  
  return (
    
    <motion.div
    className={props.customHeaderTailWindClassNames.showWatchListButton}
    onClick={() => props.setIsWatchListOpen(!props.isWatchListOpen)}
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: .3, duration: 1 }}
    whileHover={{ scale: 1.1, transition: { duration: .3 } }}
    >
      <i className={props.customHeaderTailWindClassNames.bootstrapWatchListIcon}></i> 
      
        {buttonText}
      
      </motion.div>
    
  )
}

export default ShowWatchListButton