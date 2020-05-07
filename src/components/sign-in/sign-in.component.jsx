import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState( { email:'', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sig in with your email and password</span>

                <FormInput onSubmit={this.handleSubmit}>
                    <input name='email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                    <input name='password' type='password' value={this.state.password} handleChange={this.handleChange} required />

                    <input type='submit' value='submit form' />
                 </FormInput>
            </div>
        )
    }
}

export default SignIn;