import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  { setAlert } from '../actions/alert';
import  { register } from '../actions/auth';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Signup = ({ setAlert, register }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = formData;

    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value});

    const onSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setAlert('passwords do not match', 'danger');
        } else {
            register({email, password, confirmPassword, username});
        }
    }

    return (
        <Fragment>
            <h1>Sign Up</h1>
            <p><i></i> Create Your Account</p>
            <form onSubmit={event => onSubmit(event)}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="username" 
                        value={username} 
                        onChange={event => onChange(event)}
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email"
                        value={email}
                        onChange={event => onChange(event)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={event => onChange(event)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        minLength="6"
                        value={confirmPassword}
                        onChange={event => onChange(event)}
                        
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </Fragment>
    )
};

Signup.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Signup);