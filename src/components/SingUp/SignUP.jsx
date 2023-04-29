import React, { useContext, useState } from 'react';
import "./SignUP.css"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Providers/AuthProvider';

const SignUP = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('');
        if (password !== confirm) {
            toast.error('Your password did not match');
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            toast.error("Please add at least two uppercase");
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            toast.error("Please add at least two number");
            return;
        }
        else if (password.length < 6) {
            toast.error('Password must be 6 characters or longer');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                toast.success("User Sign Up Successful");
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }   

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </div>
            </form>

            <p><small>Already have an account? <Link to="/login" className='have-login'>Login</Link></small></p>
            <ToastContainer/>
        </div>
    );
};

export default SignUP;
