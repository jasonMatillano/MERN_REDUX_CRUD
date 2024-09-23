import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';

function Users() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = axios.get('')
                console.log(response)
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
                    <button className='btn btn-success btn-sm'>
                        Add +
                    </button>
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
                        {/* Table rows go here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
