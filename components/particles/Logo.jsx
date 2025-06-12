import { motion } from "framer-motion"


const Logo = ( props ) => {

  const logo = 'palomitas'
  
  return (
    <motion.div
      className={props.customHeaderTailWindClassNames.logo}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: .2, duration: .5, ease: "backOut" }}
      >

        <i className={props.customHeaderTailWindClassNames.bootstrapLogoIcon}></i>
        {logo}

    </motion.div>
  )
}

export default Logo