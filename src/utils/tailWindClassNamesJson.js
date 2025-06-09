import WatchList from "../../components/WatchList"

//App
const commonAppTailWindClassNames = 'py-1' //Global


//Header
//Common for Header
const commonHeaderTailwindClassNames = `${commonAppTailWindClassNames}
    text-white/80 items-center overflow-hidden select-none`

//Custom for Header
const customHeaderTailWindClassNames = {
  header: `${commonHeaderTailwindClassNames}
        bg-gradient-to-t from-red-700 to-red-950 grid grid-cols-[auto_111px] sticky top-0 h-12 w-screen border-3 border-red-950 shadow-lg z-100`, //Fondo del Header aqui
  logo: `${commonHeaderTailwindClassNames}
        font-alfa sm:text-2xl pl-4`,
  bootstrapLogoIcon: `
        bi bi-film text-orange-300 text-sm sm:text-xl pr-1`, //Ícono logo
  showWatchListButton: `${commonHeaderTailwindClassNames}
        hover:cursor-pointer w-40 mt-1 mr-2 text-sm md:text-[1em]`,
  bootstrapWatchListIcon: `
        bi bi-list-stars text-orange-300 pr-1` //Ícono Favoritos
}


//Movies
//Common for Movies
const commonMoviesTailWindClassNames = `${commonAppTailWindClassNames}
      select-none px-1`

//Custom for Movies
const customMoviesTailWindClassNames = {
  loadingMessage: `${commonMoviesTailWindClassNames}
    h-80 content-end w-screen text-center font-alfa text-white text-lg uppercase`,
  movies: `${commonMoviesTailWindClassNames}
    snap-y scroll-snap-mandatory
    bg-gradient-to-tl pt-6 from-zinc-400/60 to-zinc-800/80 object-fixed pb-12 flex flex-wrap gap-6 justify-center px-4`,
  movieCard: `
    snap h-120 grid rounded-2xl max-w-80`, //Fondo gestionado por {motion} en MovieCard.
  moviePoster: `${commonMoviesTailWindClassNames}
    h-100 w-70 mx-auto rounded-t-2xl overflow-hidden object-cover object-center`,
  movieTitle: `${commonMoviesTailWindClassNames}
    h-10 w-66 text-md mx-auto text-center font-alfa text-stone-200/90 uppercase pt-1 truncate overflow-hidden text-ellipsis whitespace-nowrap`,
  //El título admite hasta 22 caracteres aprox. Luego recorta en puntos suspensivos (elípsis)
  addToWatchListButton: `${commonMoviesTailWindClassNames}
    rounded-sm text-xs bg-orange-400 px-4 h-6 mx-auto my-2 cursor-pointer`,
}

//WatchList
//Common for WatchList
const commonWatchListTailWindClassNames = `${commonAppTailWindClassNames}
        `
//Custom for WatchList
const customWatchListTailWindClassNames = {
  watchList: `${commonWatchListTailWindClassNames}
    snap-y scroll-snap-mandatory
    absolute top-0 flex h-2/3 w-screen bg-gradient-to-b from-red-700 to-red-950 object-fixed pb-12 pt-3 flex flex-wrap gap-6 justify-center px-4`,
  movies: `${commonWatchListTailWindClassNames}
    snap-x overflow-scroll scroll-snap-mandatory
    object-fixed flex gap-6 justify-center px-4 items-center`,
  movieCard: `
    snap h-80 min-w-50 grid rounded-2xl max-w-80`, //Fondo gestionado por {motion} en MovieCard.
  moviePoster: `${commonWatchListTailWindClassNames}
    h-65 w-auto rounded-t-2xl overflow-hidden object-cover object-center`,
  movieTitle: `${commonWatchListTailWindClassNames}
    w-40 text-xs text-center font-alfa text-stone-200/90 uppercase pt-1 truncate overflow-hidden text-ellipsis whitespace-nowrap`,
  //El título admite hasta 22 caracteres aprox. Luego recorta en puntos suspensivos (elípsis)
  addToWatchListButton: `${commonWatchListTailWindClassNames}
    rounded-sm text-xs bg-orange-400 px-4 h-6 mx-auto my-2 cursor-pointer`,
}

export {
  customHeaderTailWindClassNames,
  customMoviesTailWindClassNames,
  customWatchListTailWindClassNames
}