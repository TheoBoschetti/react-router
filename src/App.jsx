import Test from './components/test/Test'
import './style.css'
import { Route, Routes, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Link to={'/color/marvel'}>
        <button>MARVEL</button>
      </Link>

      <Link to={'/color/dc'}>
        <button>DC</button>
      </Link>

      <Link to={'/color/patate'}>
        <button>TRUC</button>
      </Link>
      <Routes>
        <Route path='color/:univers' element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
