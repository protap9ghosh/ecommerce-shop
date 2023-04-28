import React, { useContext } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success("Log In Successful");
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                </div>
            </form>

            <p><small>New to e-commerce shop? <Link to="/singup" className='have-login'>Create New Account</Link></small></p>
            <ToastContainer />
        </div>
    );
};

export default Login;