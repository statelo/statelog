import React from 'react';
import RegistrationForm from './RegistrationForm';
import { connect } from 'react-redux';
import { signupPostRequest } from '../actions/accountActions';
import { addFlashMessage } from '../actions/flashMessages';
import './styles/RegistrationPage.scss';

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: true
    }
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }

  handleChildUnmount() {
    this.setState({
      renderChild: false
    })
  }

  render() {
    const { signupPostRequest, addFlashMessage } = this.props
    return(
      <div className="modal">
        {this.state.renderChild ? <RegistrationForm unmountMe={this.handleChildUnmount} signupPostRequest={ signupPostRequest } addFlashMessage={ addFlashMessage } /> : null}
      </div>
    )
  }
}

RegistrationPage.propTypes = {
  signupPostRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect((state) => { return {} }, { signupPostRequest, addFlashMessage })(RegistrationPage);
