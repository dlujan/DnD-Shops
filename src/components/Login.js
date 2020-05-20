import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

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
        <Fragment>
            <div>
                <h1>Login</h1>
            </div>
            <form onSubmit={event => onSubmit(event)}>
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
                <input type="submit" value="Submit" />
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </Fragment>
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