import React from 'react';
import TextFieldGroup from './common/TextFieldGroup'
import validateInput from '../../server/shared/validations/signin';
import { connect } from 'react-redux';
import { signin } from '../actions/authActions';
import PropTypes from 'prop-types';

class SigninForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({
                errors: {},
                isLoading: true
            });

            this.props.signin(this.state)
                .then(
                    (resp) => {
                        return this.context.router.history.push('/')
                    },
                    (err) => {
                        this.setState({
                        errors: err.response.data.errors,
                        isLoading: false
                    })}
                );
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { errors, identifier, password, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Sign in</h1>

                {errors.form && <div className="alert alert-danger">{errors.form}</div>}

                <TextFieldGroup
                    field="identifier"
                    value={identifier}
                    error={errors.identifier}
                    label="Username / Email"
                    onChange={this.onChange}
                />
                <TextFieldGroup
                    field="password"
                    value={password}
                    error={errors.password}
                    label="Password"
                    type="password"
                    onChange={this.onChange}
                />

                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={isLoading}>
                        Login
                    </button>
                </div>
            </form>
        )
    }
}

SigninForm.propTypes = {
    signin: PropTypes.func.isRequired
};

SigninForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, { signin } )(SigninForm);