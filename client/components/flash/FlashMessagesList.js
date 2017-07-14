import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessagesList extends React.Component {

    render() {
        const { deleteFlashMessage } = this.props;
        const messages = this.props.messages.map(message =>
            <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage} />
        );

        return (
            <div>
                {messages}
            </div>
        )
    }
}

FlashMessagesList.propTypes = {
    deleteFlashMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);