import { motion } from "framer-motion"

const EmptyWatchList = ( props ) => {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .3 }}
        className={props.customWatchListTailWindClassNames.emptyWatchList}
        >
            <i className="bi bi-star text-[4em]"/>
            ¡Aún no tienes películas favoritas!
        </motion.div>
    )
}

export default EmptyWatchList