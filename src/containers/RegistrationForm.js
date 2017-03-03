import React from 'react';
import './styles/RegistrationForm.scss';
import validateInput from '../../server/src/shared/validations/signup';
import TextFieldGroup from '../components/common/TextFieldGroup';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.signupPostRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.context.router.push('/');
        },
        ({ response }) => { this.setState({ errors: response.data, isLoading: false }) }
      );
    }
  }

  dismiss() {
    this.props.unmountMe();
    this.context.router.push('/');
  }

  render() {
    const { errors } = this.state;

    return(
      <div className="modal-content">
        <span
          id="closeModal"
          className="close"
          onClick={this.dismiss}
        >
          &times;
        </span>

        <form onSubmit={this.onSubmit}>
          <h1 className="signup-header">SIGN UP</h1>

          <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={this.onChange}
            value={this.state.username}
            field="username"
          />

          <TextFieldGroup
            error={errors.password}
            type="password"
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
          />

          <div className="button-group">
            <button
              disabled={this.state.isLoading}
              className="registration-button"
            >
              Sign Up
            </button>
            <button
              className="login-button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

RegistrationForm.propTypes = {
  signupPostRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

RegistrationForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default RegistrationForm;
