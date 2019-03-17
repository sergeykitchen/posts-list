import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal, { closeStyle } from 'simple-react-modal';
import './styles.scss';

export class AuthorInfoModal extends Component {

  constructor() {
    super();
    this.state = {};
  };

  show = () => {
    this.setState({ show: true });
  }

  close = () => {
    this.setState({ show: false });
  };

  render() {
    const { name, phone } = this.props;
    const modalStyle = {
      maxWidth: "400px",
      width: "90%",
    };
    return (
      <Modal
        containerStyle={modalStyle}
        containerClassName="modal"
        closeOnOuterClick={true}
        show={this.state.show}
        onClose={this.close}
      >
        <span className="modal_close" style={closeStyle} onClick={this.close}>X</span>
        <div>
          <p className="modal_user-info">
            <span className="">
              Author: &nbsp;
            </span>
            {name.first} {name.last}
          </p>
          <p className="modal_user-info">
            <span className="">
              Phone: &nbsp;
            </span>
            {phone}
          </p>
        </div>
      </Modal>
    );
  };
};

AuthorInfoModal.propTypes = {
  name: PropTypes.object,
  phone: PropTypes.string,
};

export default AuthorInfoModal
