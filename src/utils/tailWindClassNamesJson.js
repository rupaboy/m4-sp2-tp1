import RemoveFromWatchListButton from "../../components/particles/watchlist/RemoveFromWatchListButton"
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
    bg-gradient-to-tl px-4 pb-12 pt-6 from-zinc-400/60 to-zinc-800/80 object-fixed flex flex-wrap gap-6 justify-center`,
  movieCard: `
    snap h-120 grid rounded-2xl max-w-80`, //Fondo gestionado por {motion} en MovieCard.
  moviePoster: `${commonMoviesTailWindClassNames}
    h-100 w-70 mx-auto rounded-t-2xl overflow-hidden object-cover object-center`,
  movieTitle: `${commonMoviesTailWindClassNames}
    w-66 text-md mx-auto text-center font-alfa text-stone-200/90 uppercase truncate overflow-hidden text-ellipsis whitespace-nowrap`,
  //El título admite hasta 22 caracteres aprox. Luego recorta en puntos suspensivos (elípsis)
  addToWatchListButton: `${commonMoviesTailWindClassNames}
    rounded-sm text-xs bg-orange-400 px-4 h-6 mx-auto mb-2 cursor-pointer`,
  removeFromWatchListButton: `${commonMoviesTailWindClassNames}
    rounded-sm text-xs bg-red-900 text-white px-4 h-6 mx-auto mb-2 cursor-pointer`,
}

//WatchList
//Common for WatchList
const commonWatchListTailWindClassNames = `${commonAppTailWindClassNames}
        `
//Custom for WatchList
const customWatchListTailWindClassNames = {
  watchList: `${commonWatchListTailWindClassNames}
    absolute fixed left-0 content-top top-10 flex h-114 w-full bg-gradient-to-b from-red-700 to-red-950 object-fixed py-8 flex flex-wrap gap-6 px-4`,
  movies: `${commonWatchListTailWindClassNames}
    snap-x scroll-snap-mandatory select-none overflow-x-scroll whitespace-nowrap scrollbar
    flex gap-6 px-4`,
  movieCard: `
    min-w-50 w-50 h-90 grid rounded-2xl p-1`, //Fondo gestionado por {motion} en MovieCard.
  moviePoster: `
    rounded-t-xl h-70 w-50 overflow-hidden object-cover`,
  movieTitle: `${commonWatchListTailWindClassNames}
    text-xs py-2 w-full px-5 text-center font-alfa text-stone-200/90 uppercase truncate overflow-hidden text-ellipsis whitespace-nowrap`,
  //El título admite hasta 22 caracteres aprox. Luego recorta en puntos suspensivos (elípsis)
  emptyWatchList: `${commonWatchListTailWindClassNames}
    grid h-full text-white content-center text-center mx-auto`,
  addToWatchListButton: `${commonWatchListTailWindClassNames}
    rounded-sm text-xs bg-orange-400 px-4 h-6 mx-auto mb-2 cursor-pointer`,
  removeFromWatchListButton: `${commonWatchListTailWindClassNames}
    rounded-sm text-xs bg-red-900 text-white px-4 h-6 mx-auto mb-2 cursor-pointer`,
}

export {
  customHeaderTailWindClassNames,
  customMoviesTailWindClassNames,
  customWatchListTailWindClassNames
}