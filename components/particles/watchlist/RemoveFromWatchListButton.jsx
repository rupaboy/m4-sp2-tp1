const RemoveFromWatchListButton = ( props ) => {
  
  return (
    <div onClick={ ()=> props.handleRemoveFromWatchList(props.movie) }>
      Quitar de Favoritos
    </div>
  )
}

export default RemoveFromWatchListButton