import axios from 'axios';
import { useState } from 'react';
import { addUser } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function CreateUser() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/create', {name, email, age})
        .then((response) => {
            dispatch(addUser({id: response.data._id, name, email, age}))
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
                <h4 className='mb-4'>Create User</h4>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='name' 
                            placeholder='Enter your name' 
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

export default CreateUser;