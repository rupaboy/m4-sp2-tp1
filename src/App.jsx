import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { movies } from './utils/moviesJson'

import {  
    customHeaderTailWindClassNames,
    customMoviesTailWindClassNames,
    customWatchListTailWindClassNames
} from './utils/tailWindClassNamesJson' //tailWind ClassNames

//Componentes
import Header from '../components/Header'
import Movies from '../components/Movies'
import WatchList from '../components/WatchList'
import Footer from '../components/footer/Footer'


const App = () => {
  
  //Estado de precarga src de imágenes.
  const [moviesReady, setMoviesReady] = useState(false);
  
  //WatchList display/hid
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);


// PreCarga
useEffect(()=>{
  const preload = async () => {
    try {
      //Intentar pre-carga
      const promises = movies.map((movie) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = movie.poster;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    
    //Pre-Carga Lista! ...
    await Promise.all(promises); 
    setMoviesReady(true); 
    
    //...O envía un error y muestra alt='title' en fallidas.
    } catch (error) {
      console.error('Error al cargar imágenes:', error);
      setMoviesReady(true);
    }
  };

  preload();
}, [ moviesReady ]); //En principio, se ejecuta una única vez.


  return (
    <div>
      <Header
        customHeaderTailWindClassNames={customHeaderTailWindClassNames}
        isWatchListOpen={isWatchListOpen}
        setIsWatchListOpen={setIsWatchListOpen}
        />
      
      {moviesReady ? ( //Despliega lista de componentes tras la carga de imágenes
        <motion.div
          initial={{ opacity: [0, 0, .3, 1] }} //Espera mínima para procesadores gráficos lentos
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          >
      
      { /*|||||||||||||||||||| COMPONENTES ||||||||||||||||||||*/}
      
          <Movies
            customMoviesTailWindClassNames=
            {customMoviesTailWindClassNames}
            />
          
          
            
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isWatchListOpen? 1: 0 }}
            transition={{ duration: 1 }}
            >
              <WatchList
                isWatchListOpen={isWatchListOpen}
                setIsWatchListOpen={setIsWatchListOpen}
                customWatchListTailWindClassNames={customWatchListTailWindClassNames} />
          </motion.div>
          

          {/*<Footer />*/}

      {/* Fin de Componentes*/}
        </motion.div>
        

      ) : (
            <motion.h1
              className={customMoviesTailWindClassNames.loadingMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 , repeat: Infinity, repeatType: 'mirror' }}
            >
              Cargando
            
            </motion.h1>
          )
      }
      

    </div>

  )
}

export default App
