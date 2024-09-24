import axios from 'axios';
import { useState } from 'react';
import { updateUser } from './redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
    const { id } = useParams();
    const users = useSelector((state) => state.users.users)
    const user = users.find((user) => user.id == id)
    console.log(user)
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3001/update/'+id, {name, email, age})
        .then((response) => {
            dispatch(updateUser({id: id, name, email, age}))
            console.log(response.data)
            navigate('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return ( 
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-4 shadow'>
            <h4 className='mb-4'>Update User</h4>
            <form onSubmit={handleUpdate}>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='name' 
                        placeholder='Enter your name' 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input 
                        type='email' 
                        className='form-control' 
                        id='email' 
                        placeholder='Enter your email' 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='age' className='form-label'>Age</label>
                    <input 
                        type='number' 
                        className='form-control' 
                        id='age' 
                        placeholder='Enter your age' 
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary w-100'>
                    Submit
                </button>
            </form>
        </div>
    </div>
     );
}

export default UpdateUser;