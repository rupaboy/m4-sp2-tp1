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
  const [watchList, setWatchList] = useState(
    [localStorage.getItem(`watchList`)]
  );

  //Función auxiliar para comparar ids en movies y en localStorage
  const isAddedAlreadyComparisson = ( id ) => {
    return watchList.some(( movie ) => movie.id === id );
  };
  
  //Estado para determinar si una película ya está en el watchList, o no.
  const [isAddedAlready, setIsAddedAlready ] = useState(false);

  //Función: ¿La película se puede agregar al WatchList o no?
  const handleAddToWatchList = ( id ) => {
    if (!isAddedAlreadyComparisson( id )) {

      const updatedList = [ ...watchList, { id } ];
      setWatchList( [ updatedList ]);
      localStorage.setItem(`watchList`, [ updatedList ]);
    }
  };

  //Función: ¿El botón Agregar A WatchList se renderiza, o no?
  const handleHoverWatchListButton = ( id ) => {
    if (!isAddedAlreadyComparisson( id )) {
      setIsAddedAlready( true )
    }
  };

  useEffect(()=>{
    watchList === null
    ? setWatchList([])
    : setWatchList( [watchList] )

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
            
            /*isAddedAlready={isAddedAlready}
            setIsAddedAlready={setIsAddedAlready}*/
            
            handleAddToWatchList={handleAddToWatchList}
            handleHoverWatchListButton={handleHoverWatchListButton}
            
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
