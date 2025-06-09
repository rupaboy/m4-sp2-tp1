import { motion } from 'framer-motion'

import Logo from './particles/Logo'
import ShowWatchListButton from './particles/ShowWatchListButton'



const Header = ( props ) => {


  return (

    <motion.div
      className={props.customHeaderTailWindClassNames.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      >

      < Logo customHeaderTailWindClassNames={props.customHeaderTailWindClassNames} />
      
      <ShowWatchListButton
        customHeaderTailWindClassNames={props.customHeaderTailWindClassNames}
        setIsWatchListOpen={props.setIsWatchListOpen}
        isWatchListOpen={props.isWatchListOpen}
        />

    </motion.div>


  )
}

export default Header