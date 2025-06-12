
import Movies from './Movies'
import EmptyWatchList from './particles/EmptyWatchList'


const WatchList = ( props ) => {

  return (
    <div className={props.customWatchListTailWindClassNames.watchList}>

          {props.watchList.length !== 0 ? (
      
            < Movies
            customMoviesTailWindClassNames={ props.customWatchListTailWindClassNames }
            isAddedAlreadyComparisson={props.isAddedAlreadyComparisson}
            movies={props.watchList}
            handleRemoveFromWatchList={props.handleRemoveFromWatchList}
            />
      
          ) : (
            < EmptyWatchList
            customWatchListTailWindClassNames={props.customWatchListTailWindClassNames}
            />
          )}
      
    </div>
  )
}

export default WatchList