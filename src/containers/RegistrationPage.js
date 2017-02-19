import React from 'react';
import RegistrationForm from './RegistrationForm';
import { connect } from 'react-redux';
import { signupPostRequest } from '../actions/accountActions';
import { addFlashMessage } from '../actions/flashMessages';

class RegistrationPage extends React.Component {
  render() {
    const { signupPostRequest, addFlashMessage } = this.props
    return(
      <div>
        <RegistrationForm signupPostRequest={ signupPostRequest } addFlashMessage={ addFlashMessage } />
      </div>
    )
  }
}

RegistrationPage.propTypes = {
  signupPostRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect((state) => { return {} }, { signupPostRequest, addFlashMessage })(RegistrationPage);
