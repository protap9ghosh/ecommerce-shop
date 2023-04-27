import React from 'react';
import "./SingUP.css"
import { Link } from 'react-router-dom';

const SingUP = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sing Up</h2>
            <form>
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
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name='password' id='' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sing Up" />
                </div>
            </form>

            <p><small>Already have an account? <Link to="/login" className='have-login'>Login</Link></small></p>
        </div>
    );
};

export default SingUP;