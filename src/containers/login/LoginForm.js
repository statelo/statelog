import React from 'react';
import TextFieldGroup from '../../components/common/TextFieldGroup';
import '../styles/RegistrationForm.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.loginPostRequest(this.state)
      .then((response) => {
        const { username } = response.data;
        this.props.addFlashMessage({
          type: 'success',
          text: 'You logined as ' + username
        })
        this.context.router.push('/');
      })
  }

  render() {
    return(
      <div className="register">
        <form onSubmit={this.onSubmit}>
          <h1>LOGIN</h1>

          <TextFieldGroup
            label="Username"
            field="username"
            value={this.state.username}
            onChange={this.onChange}
            type="text"
          />

          <TextFieldGroup
            label="Password"
            field="password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
          />

          <button>Login</button>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  loginPostRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginForm;
