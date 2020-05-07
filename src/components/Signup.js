import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Signup = ({ setAlert }) => {
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
            const newUser = {
                email,
                password,
                confirmPassword,
                username
            }
            axios.post('https://us-central1-dnd-shops.cloudfunctions.net/api/signup', newUser)
                .then((res) => {
                    console.log(res.data);
                    localStorage.setItem(`FBIdToken`, `Bearer ${res.data.token}`);
                })
                .catch((err) => {
                    console.error(err.response.data)
                })
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
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email"
                        value={email}
                        onChange={event => onChange(event)}
                        required
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
                        required
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
};

export default connect(null, { setAlert })(Signup);