import React from 'react';
import SigninForm from './SigninForm';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignupRequest, isUserExists } from '../actions/signupActions';
import { addFlashMessage } from '../actions/flashMessages';

class SigninPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                     <SigninForm />
                </div>
            </div>
        )
    }
}

export default SigninPage;