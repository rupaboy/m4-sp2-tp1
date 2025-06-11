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
  
    // WATCHLIST |||||||||||||||||||||||||||||||||||||||||||||||||||
  //WatchList display/hid
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);

  //Estado para elementos en el WatchList
  const [watchList, setWatchList] = useState([]);

  //Función auxiliar para comparar ids en movies y en localStorage
  const isAddedAlreadyComparisson = ( movie ) => {
    return watchList.some((watchList) => movie.id === watchList.id );
  };

  //Función: ¿La película se puede agregar al WatchList o no?
  const handleAddToWatchList = ( movie ) => {
    if (!isAddedAlreadyComparisson( movie )) {

      const updatedList = [ ...watchList, movie ];
      setWatchList( updatedList );
      localStorage.setItem(`watchList`, [JSON.stringify(updatedList)] );
    }
  };

  //Función: ¿La película se puede quitar de la WatchList o no?
  const handleRemoveFromWatchList = ( movie ) => {
    if (isAddedAlreadyComparisson( movie )) {
      const updatedList = watchList.filter((item) => item.id !== movie.id);
      setWatchList(updatedList);
      localStorage.setItem(`watchList`, [JSON.stringify(updatedList)] );
    }
  };

  useEffect(()=>{
    const storedWatchList = localStorage.getItem(`watchList`)
    storedWatchList !== null ? setWatchList(JSON.parse(storedWatchList)) : []
  }, [])

  // MOVIES |||||||||||||||||||||||||||||||||||||||||||||||||||

  //Estado de precarga src de imágenes.
  const [moviesReady, setMoviesReady] = useState(false);

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
      <Header //Navegación y encabezado
        customHeaderTailWindClassNames={customHeaderTailWindClassNames}
        isWatchListOpen={isWatchListOpen}
        setIsWatchListOpen={setIsWatchListOpen}
        />
      
      
      {/* |||||||||||||||||||| MAIN |||||||||||||||||||| */}
      {moviesReady ? ( //Despliega lista de componentes tras la carga de imágenes
        <motion.main
        
          initial={{ opacity: [0, 0, .3, 1] }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }} //Espera mínima para procesadores gráficos lentos
          >
      
      { /*|||||||||||||||||||| COMPONENTES ||||||||||||||||||||*/}
      
          <Movies
            movies={movies}

            watchList={watchList}
            setWatchList={setWatchList}
            
            handleAddToWatchList={handleAddToWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}

            isAddedAlreadyComparisson={isAddedAlreadyComparisson}
            
            customMoviesTailWindClassNames=
            {customMoviesTailWindClassNames}
            />
          
          
          <motion.div
            className={ //BugFix para componente absolute con eventos hover (ya no se superponen).
              isWatchListOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: isWatchListOpen? 1: 0 }}
            transition={{ duration: 1 }}
            >
              <WatchList
                watchList={watchList}
                isWatchListOpen={isWatchListOpen}
                setIsWatchListOpen={setIsWatchListOpen}
                isAddedAlreadyComparisson={isAddedAlreadyComparisson}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                customWatchListTailWindClassNames={customWatchListTailWindClassNames} />
          </motion.div>

          {/*<Footer />*/}

      {/* |||||||||||||||||||| Fin ||||||||||||||||||||*/}
        </motion.main>
        

            //LOADER
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
