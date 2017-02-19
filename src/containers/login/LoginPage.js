import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginPostRequest } from '../../actions/accountActions';
import { addFlashMessage } from '../../actions/flashMessages';

class LoginPage extends React.Component {
  render() {
    const { loginPostRequest, addFlashMessage } = this.props;
    return(
      <div>
        <LoginForm loginPostRequest={loginPostRequest} addFlashMessage={addFlashMessage} />
      </div>
    )
  }
}

LoginPage.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired,
  loginPostRequest: React.PropTypes.func.isRequired
}

export default connect(null, { loginPostRequest, addFlashMessage })(LoginPage);
