import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value});

    const onSubmit = async event => {
        event.preventDefault();
        const user = {
            email,
            password
        }
        axios.post('https://us-central1-dnd-shops.cloudfunctions.net/api/login', user)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem(`FBIdToken`, `Bearer ${res.data.token}`);
            })
            .catch((err) => {
                console.error(err.response.data)
            })
    }

    return (
        <Fragment>
            <h1>Login</h1>
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

export default Login;