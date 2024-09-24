import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './User'
import Create from './CreateUser'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
