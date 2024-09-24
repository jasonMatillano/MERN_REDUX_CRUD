import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector  } from 'react-redux';
import { getUser } from './redux/userSlice';
import { Link } from 'react-router-dom';


function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

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

                console.log(users)
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()
    }, []);

    return (  
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4 shadow'>
                <div className='d-flex justify-content-between mb-3'>
                    <h4>Users</h4>
                    <Link to='/create'>
                        <button className='btn btn-success btn-sm'>
                            Add +
                        </button>
                    </Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <button className='btn btn-success btn-sm'>
                                                Update
                                            </button>
                                            <button className='btn btn-danger btn-sm'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
