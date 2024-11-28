import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("username", username);
        console.log("password", password);
      
        setUsername('')
        setPassword('')
        

    }

    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-4  form-container mx-auto mt-5'>
                        <form onSubmit={handleSubmit}>
                            <h1 className="reg-heading mb-4">Login Form</h1>
                            <h5>Enter Your Username</h5>
                            <MDBInput
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                label='Username'
                                id='reg-userinput'
                                type='text'
                                className='mt-2'

                            />
                            <h5>Enter Your Password</h5>
                            <MDBInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label='Password'
                                id='reg-passinput'
                                type='password'
                                className='mt-2'
                            />    
                                 
                             <button id="reg-button" className='btn btn-primary form-control mt-3'>Login</button>
                             <Link to={"/Register"}><button id="log-button" className='btn btn-primary form-control mt-3'>Register</button></Link>
                     
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default LoginPage