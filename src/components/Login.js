import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

import '../App.css';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value});

    const onSubmit = async event => {
        event.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Login</h1>
            </div>
            <form onSubmit={event => onSubmit(event)}>
                <div>
                    <input
                        className="form-input"
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
                        className="form-input"
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
                    <input className="form-button" type="submit" value="Submit" />
                </div>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);