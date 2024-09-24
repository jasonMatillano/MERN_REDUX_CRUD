import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './User'
import Create from './CreateUser'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/userSlice';


function App() {

  const dispatch = useDispatch();
    
  useEffect(() => {
      const fetchData = async () => {
          try {
              axios.get('http://localhost:3001')
              .then((response) => {
                  dispatch(getUser(response.data));
              })
              .catch((error) => {
                  console.log(error)
              })
          } catch (error) {
              console.log(error)
          }

      }
      fetchData()
  }, []);

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
