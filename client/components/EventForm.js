import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';
import { connect } from 'react-redux';
import { createEvent } from '../actions/eventActions';
import PropTypes from 'prop-types';


class EventForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { title, errors, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create New Game Event</h1>

                {errors.form && <div className="alert alert-danger">{errors.form}</div>}

                <TextFieldGroup
                    field="title"
                    value={title}
                    name="title"
                    onChange={this.onChange}
                    error={errors.title}
                    label='Event Title'
                />

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Create
                    </button>
                </div>
            </form>
        )
    }
}

EventForm.PropTypes = {
    createEvent: PropTypes.func.isRequired
};

export default connect(null, { createEvent })(EventForm);