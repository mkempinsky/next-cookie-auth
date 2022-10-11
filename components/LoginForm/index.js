import React from 'react';
import {loginUser} from '../../lib/auth';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        loginUser(this.state.email, this.state.password);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="test@mail.com"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input type="password" name="password" onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
export default LoginForm;
