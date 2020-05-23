import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import  { setAlert } from '../actions/alert';
import  { register } from '../actions/auth';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import '../App.css';

const Signup = ({ setAlert, register, isAuthenticated }) => {
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

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Sign Up</h1>
            </div>
            <p><i></i> Start Creating Your Own Items!</p>
            <form onSubmit={event => onSubmit(event)}>
                <div>
                    <input
                        className="form-input"
                        type="text" 
                        placeholder="Name" 
                        name="username" 
                        value={username} 
                        onChange={event => onChange(event)}
                    />
                </div>
                <div>
                    <input
                        className="form-input"
                        type="email" 
                        placeholder="Email Address" 
                        name="email"
                        value={email}
                        onChange={event => onChange(event)}
                    />
                </div>
                <div>
                    <input
                        className="form-input"
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
                        className="form-input"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        minLength="6"
                        value={confirmPassword}
                        onChange={event => onChange(event)}
                        
                    />
                </div>
                <div>
                    <input className="form-button" type="submit" value="Submit" />
                </div>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    )
};

Signup.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Signup);