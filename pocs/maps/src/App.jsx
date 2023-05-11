import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoadMap from './load-maps'
import AutocompletePlaces from './autocomplete-places'
import Menu from './Menu'
// import ClusteringMarks from './clustering-marks'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='/load-maps' element={<LoadMap />} />
      <Route path='/autocomplete-places' element={<AutocompletePlaces />} />
      {/* <Route path='/clustering' element={<ClusteringMarks />} /> */}
      <Route path='*' element='not found..' />
    </Routes>
  )
}

export default App
