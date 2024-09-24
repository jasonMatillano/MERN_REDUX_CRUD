import 'bootstrap/dist/css/bootstrap.min.css';


function CreateUser() {
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4 shadow'>
                <h4 className='mb-4'>Create User</h4>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='name' 
                            placeholder='Enter your name' 
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input 
                            type='email' 
                            className='form-control' 
                            id='email' 
                            placeholder='Enter your email' 
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='age' className='form-label'>Age</label>
                        <input 
                            type='number' 
                            className='form-control' 
                            id='age' 
                            placeholder='Enter your age' 
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