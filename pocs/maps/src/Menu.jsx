import { Link } from 'react-router-dom'

function Menu () {
  return (
    <div className='menucontainer'>
      <h1>POC for google maps</h1>
      <Link to='/load-maps'>Load Map</Link>
      <Link to='/autocomplete-places'>Autocomplete Places</Link>
      {/* <Link to='/clustering'>Clustering Markers</Link> */}
    </div>
  )
}

export default Menu
