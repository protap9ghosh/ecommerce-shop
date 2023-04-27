import React, { useState } from 'react';
import "./SingUP.css"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingUP = () => {
    const [error, setError] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password !== confirm) {
            toast.error('Your password did not match');
            return;
        }
        else if (password.length < 6) {
            toast.error('Password must be 6 characters or longer');
            return;
        }
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sing Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' id='' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sing Up" />
                </div>
            </form>

            <p><small>Already have an account? <Link to="/login" className='have-login'>Login</Link></small></p>
            <ToastContainer/>
        </div>
    );
};

export default SingUP;